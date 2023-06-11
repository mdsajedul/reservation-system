const { findHotel, createHotel, findHotelByProperties } = require("../services/hotel")
const error = require("../utils/error")

const getHotelById = async(req,res,next)=>{
    const {hotelId} = req.params
    try {
        const hotel = await findHotelByProperties('_id',hotelId)
        if(!hotelId){
            throw error('Hotel not found!',404)
        }
        return res.status(200).json(hotel)
    } catch (error) {
        next(error)
    }
}

const HotelByAgentId = async(req,res,next)=>{
    try {
        const hotel = await findHotelByProperties('agentId',req.user._id)
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
        const hotel = await createHotel({agentId, hotelName, city, state, country, address, overview, features, facilities, roomType, phone, email, website, checkInTime, checkOutTime, policies, availability, images })
        if(!hotel){
            throw error('Hotel not created!',400)
        }
        return res.status(201).json(hotel)
    } catch (error) {
        next(error)
    }
}
const getAllHotel = async(_req,res,next)=>{
    try {
        const hotels = await findHotel();
        if(hotels.length<=0){
            throw error('No hotel found!',404);
        }
        return res.status(200).json(hotels)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getHotelById, patchHotelById, postHotel,getAllHotel,HotelByAgentId
}