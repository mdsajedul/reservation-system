const { serverUrl } = require("../config/config");
const { createRoom, findRoombyProperties } = require("../services/room");
const error = require("../utils/error");

const postRoom =async (req,res,next)=>{
    const {roomNumber,roomType,price,availability,overview,features,facilities,floor,smokingPolicy,bedType,occupancy} = req.body
    const {hotelId} = req.params;
    console.log(hotelId);
    try {
        const images = req.files;
        const room = await createRoom({hotelId,roomNumber,roomType,price,availability,overview,features,facilities,floor,smokingPolicy,bedType,occupancy,images})
        if(!room){
            throw error('Room not created!',400)
        }
        return res.status(201).json(room)
    } catch (error) {
        next(error)
    }
}

const getRoomsByHotelId = async(req,res,next)=>{
    const {hotelId} = req.params
    try {
        const rooms = await findRoombyProperties('hotelId',hotelId);
        if(rooms.length<=0){
            throw error('No room found!',400)
        }
        const modifiedRooms = rooms.map((room)=>({
            ...room,
            images: room.images.map((image)=>`${serverUrl}/uploads/${image}`)
        }))
        return res.status(200).json(modifiedRooms)
    } catch (error) {
        next(error)
    }
}

const getRoomById = async (req,res,next)=>{
    const {roomId} = req.params
    try {
        const room = await findRoombyProperties('_id',roomId)
        if(!room){
            throw error('Room not found!',400)
        }
        return res.status(200).json(room)
    } catch (error) {
        next(error)
    }
}

const patchRoomById = async (req,res,next)=>{
    const {roomId} = req.params
    try {
        
    } catch (error) {
        next(error)
    }
}

module.exports = {
    postRoom, getRoomsByHotelId, getRoomById, patchRoomById
}