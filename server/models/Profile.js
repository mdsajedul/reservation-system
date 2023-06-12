const { Schema, default: mongoose, model } = require("mongoose");

const profileSchema = new Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref:'User',required: true},
    fullname: {
        type: String,
        required: true,
    },
    dateOfBirth: {
        type: Date
    },
    contactInfo:{
        phone:{type: String},
        email:{type: String}
    },
    location:{
        country:{type: String},
        state: {type: String},
        district: {type: String},
        upazila: {type: String}
    },
    biography:{
        type: String
    },
    preferences:{
        notification: {type: Boolean},
        language:{type: String}
    },
    socialMediaLink:[
        {
            name : {type: String},
            link : {type: String}
        }
    ],
    profileImage:{
        type: String
    }
})

const Profile = model('Profile',profileSchema)
module.exports = Profile