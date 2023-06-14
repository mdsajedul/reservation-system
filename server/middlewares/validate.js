const Joi = require('joi')
const { default: mongoose } = require('mongoose')

const isValidObjectId = (value,helpers)=>{
    if(!mongoose.Types.ObjectId.isValid(value)){
        return helpers.error('any.invalid')
    }
    return value
}

const validationSchema = {
    login : Joi.object().keys({
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required()
    }),
    register: Joi.object().keys({
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required(),
        username: Joi.string().min(4).max(30).required(),
        roles: Joi.array().items(Joi.string())
    }),
    postProfile: Joi.object().keys({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        dateOfBirth: Joi.date().required(),
        phone: Joi.string().required(),
        email: Joi.string().email(),
        country: Joi.string(),
        state: Joi.string(),
        district: Joi.string(),
        upazila: Joi.string(),
        biography: Joi.string(),
        notification: Joi.boolean(),
        language: Joi.string(),
        socialMediaLink: Joi.array().items(),
        profileImage: Joi.allow()
    }),
    updateUser: Joi.object().keys({
        username: Joi.string().min(4).max(30),
        email : Joi.string().email(),
        roles: Joi.array().items(Joi.string()),
    }),
    objectIdValidation: Joi.object().keys({
        userId: Joi.string().custom(isValidObjectId,'Custom validation'),
        agentId: Joi.string().custom(isValidObjectId,'Custom validation'),
        hotelId: Joi.string().custom(isValidObjectId,'Custom validation'),
        roomId: Joi.string().custom(isValidObjectId,'Custom validation')
    }),
    createHotel: Joi.object().keys({
        agentId: Joi.string().custom(isValidObjectId,'Custom validation'),
        hotelName : Joi.string().min(4).max(40).required(),
        city: Joi.string().required(),
        state: Joi.string().required(),
        country: Joi.string().required(),
        address: Joi.string().min(6).required(),
        overview: Joi.string(),
        features: Joi.array().items(Joi.string()),
        facilities: Joi.array().items(Joi.string()),
        roomType: Joi.array().items(Joi.string()),
        phone: Joi.array().items(Joi.string()),
        email: Joi.array().items(Joi.string()),
        website: Joi.string(),
        checkInTime: Joi.string(),
        checkOutTime: Joi.string(),
        policies: Joi.array().items(),
        availability: Joi.boolean(),
        images: Joi.allow()
    }),
    createRoom: Joi.object().keys({
        roomNumber: Joi.string(),
        roomType: Joi.string(),
        price: Joi.number(),
        availability: Joi.string(),
        overview: Joi.string(),
        features: Joi.array().items(Joi.string()),
        facilities: Joi.array().items(Joi.string()),
        floor: Joi.number(),
        smokingPolicy: Joi.boolean(),
        occupancy: Joi.number(),
        images: Joi.allow()
    }),
    submitBooking: Joi.object().keys({
        userId: Joi.string().custom(isValidObjectId,'Custom validation'),
        roomId: Joi.string().custom(isValidObjectId,'Custom validation'),
        guests: Joi.number(),
        totalPrice: Joi.number(),
        paymentStatus: Joi.string(),
        paymentMethod: Joi.string(),
        checkInDate: Joi.date(),
        checkOutDate: Joi.date(),
        BookingStatus: Joi.string()
    })
}

const validate= (validationSchema, property)=>{
    return (req,res,next)=>{
        const {error, value} = validationSchema.validate(req[property])
        const valid = error == null
        if(valid){
            next()
        }
        else{
            const {details} = error;
            const message = details.map(err=> err.message).join(',')
            res.status(403).json({message})
        }
    }
}

module.exports ={
    validationSchema, validate
}