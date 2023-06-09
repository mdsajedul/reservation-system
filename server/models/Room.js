const { Schema, default: mongoose, model } = require("mongoose");

const roomSchema = new Schema({
    hotelId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hotel',
        required: true
    },
    roomNumber: {type: String, required: true},
    roomType: {type: String, required: true},
    price: {type: Number, required: true},
    availability: {
        type: String,
        default: 'Vacant',
        enum:['Vacant','Occupied, Under maintenance']
    },
    description: {
        overview: {type: String, required: true},
        features: [{type: String, required: true}],
    },
    facilities: [{type: String, required: true}],
    images:[{
        type: String
    }],
    floor: {type: Number, required},
    smokingPolicy:{
        type: String,
        default:'smoking',
        enum:['Smoking,Non-smoking']
    },
    debType: {
        type: String,
        default: 'Single',
        enum:['Single', 'Double', 'Queen', 'King']
    },
    occupancy:{
        type: Number,
        required: true
    }
})

const Room = model('Room',roomSchema)
module.exports = Room