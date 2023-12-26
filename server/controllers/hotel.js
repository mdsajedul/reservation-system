const { serverUrl } = require("../config/config");
const { findHotel, createHotel, findHotelByProperties } = require("../services/hotel");
const { findProfileByProperties } = require("../services/profile");
const error = require("../utils/error")

const getHotelById = async(req,res,next)=>{
    const {hotelId} = req.params
    
    try {
        const hotel = await findHotelByProperties('_id',hotelId)
        console.log('user id/ agent id',hotel?.agentId)
        let profile = await findProfileByProperties('userId',hotel?.agentId)
        console.log(profile)
        if(!hotel){
            throw error('Hotel not found!',404)
        }
        const modifiedHotel = {
            ...hotel,
            agentDetails: profile,
            images: hotel.images.map((image)=>`${serverUrl}/uploads/${image}`)
        }
        return res.status(200).json(modifiedHotel)
    } catch (error) {
        next(error)
    }
}

const HotelByAgentId = async(req,res,next)=>{
    try {
        const hotel = await findHotelByProperties('agentId', req.params.agentId)
        if(!hotel){
            throw error('Hotel not found!',404)
        }
        return res.status(200).json(hotel)
    } catch (error) {
        next(error)
    }
}

const patchHotelById = (req,res,next)=>{
    try {
        
    } catch (error) {
        next(error)
    }
}

const postHotel =async (req,res,next)=>{
    const {agentId, hotelName, city, state, country, address, overview, features, facilities, roomType, phone, email, website, checkInTime, checkOutTime, policies, availability} = req.body

    try {
        const images = req.files;
        const hotel = await createHotel({agentId: agentId? agentId : req.user._id, hotelName, city, state, country, address, overview, features, facilities, roomType, phone, email, website, checkInTime, checkOutTime, policies, availability, images })
        if(!hotel){
            throw error('Hotel not created!',400)
        }
        return res.status(201).json(hotel)
    } catch (error) {
        next(error)
    }
}

const getAllHotel = async (_req, res, next) => {
    try {
      const hotels = await findHotel();
  
      const modifiedHotels = hotels.map((hotel) => ({
        ...hotel,
        images: hotel.images.map((image) => `${serverUrl}/uploads/${image}`),
      }));
  
      if (modifiedHotels.length <= 0) {
        throw new Error('No hotels found!');
      }
  
      return res.status(200).json(modifiedHotels);
    } catch (error) {
      next(error);
    }
  };
  

module.exports = {
    getHotelById, patchHotelById, postHotel,getAllHotel,HotelByAgentId
}