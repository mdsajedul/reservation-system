const { Schema, default: mongoose, model } = require("mongoose");

const bookingDateSchema = new Schema({
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
    startDate:{
        type: Date
    },
    endDate:{
        type: Date
    }
})

const BookingDate = model('BookingDate',bookingDateSchema)
module.exports = BookingDate