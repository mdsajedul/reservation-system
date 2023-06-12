const Profile = require("../models/Profile")
const error = require("../utils/error")

const findProfile =()=>{
    return Profile.find()
}

const findProfileByProperties = (key,value)=>{
    console.log(key,value)
    if(key==="_id"){
        return Profile.findById(value).exec()
    }
    return Profile.findOne({[key]:value}).exec()
}

const createProfile =async ({userId, firstName, lastName, dateOfBirth, phone, email, country, state, district, upazila, biography, notification, language, socialMediaLink, profileImage})=>{

    const alreadyCreated = await findProfileByProperties('userId',userId)
    console.log(alreadyCreated)
    if(alreadyCreated){
        throw error('You have already created your profile',400)
    }
    const profile = new Profile({
        userId,
        fullname: `${firstName} ${lastName}`,
        dateOfBirth: new Date(dateOfBirth),
        contactInfo: {
            phone,
            email
        },
        location:{
            country,
            state,
            district,
            upazila
        },
        biography,
        preferences:{
            notification,
            language
        },
        // socialMediaLink : JSON.parse(socialMediaLink),
        profileImage
    })

    return profile.save()
}

const updateProfile =({userId, firstName, lastName, dateOfBirth, phone, email, country, state, district, upazila, biography, notification, language, socialMediaLink, profileImage})=>{
    const updatedFields = {
    
    }
}

 module.exports = {
    findProfile,
    findProfileByProperties,
    createProfile
 }