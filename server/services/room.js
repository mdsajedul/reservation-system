const Room = require("../models/Room");
const error = require("../utils/error");
const { findHotelByProperties } = require("./hotel");

const findRoom =()=>{
    return Room.find().lean();
}

const findRoombyProperties =(key,value)=>{
    if(key==='_id'){
        return Room.findById(value).lean()
    }
    return Room.find({[key]:value}).lean()
}

const createRoom = async({hotelId,roomNumber,roomType,price,availability,overview,features,facilities,images,floor,smokingPolicy,bedType,occupancy})=>{

    const isHotelExist =await findHotelByProperties('_id',hotelId)
    if(!isHotelExist){
        throw error('No hotel found to create room',400)
    }
    const files = images.map((image)=> image.filename)
    const room = Room({
        hotelId,
        roomNumber,
        roomType,
        price,
        availability,
        description: {
            overview,
            features
        },
        facilities,
        images:files,
        floor,
        smokingPolicy,
        bedType,
        occupancy
    })
    return room.save()
}

const updateRoom = ({hotelId,roomNumber,roomType,price,availability,overview,features,facilities,images,floor,smokingPolicy,bedType,occupancy})=>{

}

module.exports = {
    findRoom, findRoombyProperties,createRoom
}