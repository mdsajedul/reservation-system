const { Schema, default: mongoose } = require("mongoose");

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
        phone:{type: String}
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
    bookingHistory: [
        {
            type: Object
        }
    ],
    reviewsAndRatings: [
        {
            hotelId: {type: mongoose.Schema.Types.ObjectId, ref:'Hotel'},
            rating: {type: Number},
            review: {type: String}
        }
    ],
    // paymentInformation: [
    //     {
    //         method:{type: String},
    //         price: {type: Number}
            
    //     }
    // ],
    

})