const Booking = require("../models/Booking");
const BookingDate = require("../models/BookingDate");
const error = require("../utils/error")
const { findRoombyProperties } = require("./room")



const saveBookingDates = ({month,year,days,bookingId,roomId})=>{
    const bookingDates = BookingDate({
        bookingId,
        roomId,
        monthNo: month,
        year,
        days
    })
    return bookingDates.save()
}

const parseValuesFromDates = (data)=>{
    const day = [];
    const month = [];
    const year = [];

    data.forEach((date)=>{
        const [yearValue,monthValue,dayValue] = date.split('/');
        year.push(parseInt(yearValue));
        month.push(parseInt(monthValue));
        day.push(parseInt(dayValue))
    })

    return {
        days: [...new Set(day)],
        month: [...new Set(month)],
        year: [...new Set(year)]
    }
}

const submitBooking = async({userId,roomId,guests,totalPrice,paymentStatus,paymentMethod,bookingStatus,dates})=>{
    const room = await findRoombyProperties('_id',roomId)
    if(!room){
        throw error('Your selected room not found!',404);
    }

    const {days,month,year} = parseValuesFromDates(dates)
    console.log(days, month, year);

    const booking = Booking({
        userId,
        guests,
        roomId,
        totalPrice,
        paymentMethod,
        paymentStatus,
        bookingStatus
    })

    const bookingDays = await saveBookingDates({days,month,year,roomId,bookingId:booking?._id})

    if(!bookingDays){
        throw error('Booking dates not saved',400)
    }
    return booking.save()

}

module.exports = {
    submitBooking
}