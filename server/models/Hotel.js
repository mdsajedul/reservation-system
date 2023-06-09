const { Schema, default: mongoose, model } = require("mongoose");

const hotelSchema = new Schema({
    agentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    hotelName: {
        type: String,
        required: true,
    },
    location: {
        city: {type: String, required: true},
        state: {type: String, required: true},
        country: {type: String, required: true},
        address:{type: String, required: true}
    }, 
    description: {
        overview: {type: String, required: true},
        features: [{type: String, required: true}],
    },
    facilities: [{type: String, required: true}],

    roomType:[{
        type: String
    }],

    contactInformation:{
        phone:[{type: String, required: true}],
        email: [{type: String, required: true}],
        website: {type: String, required: true}
    },
    checkInTime: {type: String, required: true},
    checkOutTime: {type: String, required: true},

    policies: [{
        name: {type: String, required: true},
        description: {type: String, required: true}
    }],
    availability: {
        type: Boolean,
        default: true
    },
    images:[{
        type: String
    }],
    rating:{type: Number},
    reviews:[{
        name:{type: String, required: true},
        review: {type: String, required: true}
    }]
})

const Hotel = model('Hotel',hotelSchema);
module.exports = Hotel;