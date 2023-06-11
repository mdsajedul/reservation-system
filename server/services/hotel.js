const Hotel = require("../models/Hotel")
const error = require("../utils/error")

const findHotel =()=>{
    return Hotel.find()
}

const findHotelByProperties = (key,value)=>{
    if(key==='_id'){
        return Hotel.findById(value)
    }
    return Hotel.findOne({[key]:value})
}

const createHotel =async ({agentId, hotelName, city, state, country, address, overview, features, facilities, roomType, phone, email, website, checkInTime, checkOutTime, policies, availability, images })=>{
    const alreadyCreated = await findHotelByProperties('agentId', agentId);
    if(alreadyCreated){
        throw error('Agent already created hotel',400)
    }
    const hotel = new Hotel({
        agentId,
        hotelName,
        location: {
            city,
            state,
            country,
            address
        },
        description: {
            overview,
            features
        },
        facilities,
        roomType,
        contactInformation: {
            phone,
            email,
            website
        },
        checkInTime,
        checkOutTime,
        policies : JSON.parse(policies),
        availability,
        images,
    })
    return hotel.save()
}

const updateHotel = (id,{agentId, hotelName, city, state, country, address, overview, features, facilities, roomType, phone, email, website, checkInTime, checkOutTime, policies, availability, images})=>{

    const updatedFields = {
        hotelName,
        'location.city':city,
        'location.state':state,
        'location.country':country,
        'location.address':address,
        'description.overview':overview,
        'description.features': features,
        facilities,
        roomType,
        'contactInformation.phone':phone,
        'contactInformation.email':email,
        'contactInformation.website':website,
        checkInTime,
        checkOutTime,
        policies: JSON.parse(policies),
        availability,
        images
    }
    const hotel = new Hotel.updateOne({_id:id},{$set: updatedFields})
    return hotel
}

module.exports = {
    findHotel, findHotelByProperties, createHotel, updateHotel
}