const Booking = require("../models/Booking");
const compareDateArrays = require("../utils/compareDatesArray");
const datesFromStartEndDates = require("../utils/datesFromStartEndDates");
const error = require("../utils/error");
const { findBookingDatesByProperties, saveBookingDates } = require("./bookingDates");
const { findRoombyProperties } = require("./room")



const getBookedDates = async (roomId)=>{

    const bookings = await findBookingDatesByProperties('roomId',roomId);
    if(bookings.length<=0){
        return []
    }

    const allBookedDates = bookings.reduce((dates,booking)=>{
        const bookedDates = datesFromStartEndDates(booking.startDate,booking.endDate);
        return [...dates,...bookedDates];
    },[]);

    return allBookedDates
}



const submitBooking = async({userId,roomId,guests,totalPrice,paymentStatus,paymentMethod,bookingStatus,checkInDate,checkOutDate})=>{
    const room = await findRoombyProperties('_id',roomId)
    if(!room){
        throw error('Your selected room not found!',404);
    }

    const wsihedBookDates = datesFromStartEndDates(checkInDate,checkOutDate);
    const allBookedDates =await getBookedDates(roomId)
    console.log('wished Dates',wsihedBookDates);
    console.log('all booked dates',allBookedDates);

    const isTrue = compareDateArrays(wsihedBookDates,allBookedDates)
    if(!isTrue){
        throw error('Please select diffrent dates',400)
    }
    console.log('Is true value:',isTrue);

    const booking = Booking({
        userId,
        guests,
        roomId,
        totalPrice,
        paymentMethod,
        paymentStatus,
        bookingStatus
    })
    console.log(booking);

    const bookingDays = await saveBookingDates({bookingId:booking._id,roomId,startDate:checkInDate,endDate:checkOutDate})
    console.log(bookingDays);
    if(!bookingDays){
        throw error('Booking dates not saved',400)
    }
    return booking.save()
}

module.exports = {
    submitBooking
}