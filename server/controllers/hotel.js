const { findHotel, createHotel } = require("../services/hotel")
const error = require("../utils/error")

const getHotelById = (req,res,next)=>{
    try {
        
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
    const {agentId, hotelName, city, state, country, address, overview, features, facilities, roomType, phone, email, website, checkInTime, checkOutTime, policies, availability, images} = req.body
    
    try {
        const hotel = await createHotel({agentId, hotelName, city, state, country, address, overview, features, facilities, roomType, phone, email, website, checkInTime, checkOutTime, policies, availability, images})
        if(!hotel){
            throw error('Hotel not created!',400)
        }
        return res.status(201).json(hotel)
    } catch (error) {
        next(error)
    }
}
const getAllHotel = async(req,res,next)=>{
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
    getHotelById, patchHotelById, postHotel,getAllHotel
}