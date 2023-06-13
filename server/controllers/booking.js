const { submitBooking } = require("../services/booking");
const error = require("../utils/error");

const postBooking =async (req,res,next)=>{
    const {userId,roomId,guests,totalPrice,paymentStatus,paymentMethod,bookingStatus,checkInDate,checkOutDate} = req.body;
    try {
        const booking =await submitBooking({userId,roomId,guests,totalPrice,paymentStatus,paymentMethod,bookingStatus,checkInDate,checkOutDate})
        if(!booking){
            throw error('Booking not submitted!',400)
        }
        return res.status(200).json(booking)
    } catch (error) {
        next(error)
    }
}

module.exports ={
    postBooking
}