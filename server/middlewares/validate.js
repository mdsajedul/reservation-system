const Joi = require('joi')

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