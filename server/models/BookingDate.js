const { Schema, default: mongoose, model } = require("mongoose");

const bookingDateSchema = new Schema({
    monthNo:[{
        type: Number,
        required: true
    }],
    roomId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room',
        required: true
    },
    bookingId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Booking',
        required: true
    },
    year: [{
        type: Number,
        required: true,
    }],
    days:[
        {
            type: Number,
            required: true
        }
    ]
})

const BookingDate = model('BookingDate',bookingDateSchema)
module.exports = BookingDate