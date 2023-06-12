const { Schema, model, default: mongoose } = require("mongoose");

const bookingSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  roomId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Room',
    required: true,
  },
  guests: {
    type: Number,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  paymentStatus: {
    type: String,
    enum: ['Pending', 'Paid'],
    default: 'Pending',
    required: true
  },
  bookingStatus: {
    type: String,
    enum: ['Confirmed', 'Cancelled','Pending'],
    default: 'Pending',
    required: true
  },
  paymentMethod: {
    type: String,
    required: true
  }
},{timestamps:true});

const Booking = model('Booking',bookingSchema)
module.exports = Booking