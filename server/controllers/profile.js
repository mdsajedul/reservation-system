const { createProfile } = require("../services/profile");
const error = require("../utils/error");

const postProfile =async (req,res,next)=>{
    const { firstName, lastName, dateOfBirth, phone, email, country, state, district, upazila, biography, notification, language, socialMediaLink} = req.body;
    const file = req.file.filename;
   
    try {
        const profile = await createProfile({userId: req.user._id,firstName,lastName,dateOfBirth,phone,email,country,state,district,upazila,biography,notification,language,socialMediaLink, profileImage: file})

        console.log(profile)

        if(!profile){
            throw error('Profile not created!',400)
        }
        return res.status(201).json({message:'Profile created',profile})
    } catch (error) {
        next(error)
    }
}
const patchProfile = (req,res,next)=>{
    try {
        
    } catch (error) {
        next(error)
    }
}



const deleteProfile = (req,res,next)=>{
    try {
        
    } catch (error) {
        next(error)
    }
}

module.exports = {
    postProfile, patchProfile, deleteProfile
}