const BookingDate = require("../models/BookingDate")

const findBookingDates = ()=>{
    return BookingDate.find()
}

const findBookingDatesByProperties =(key,value)=>{
    if(key==="_id"){
        return BookingDate.findById(value)
    }
    return BookingDate.find({[key]:value})
}

const saveBookingDates = ({roomId,bookingId,startDate,endDate})=>{
    console.log(roomId,bookingId,startDate,endDate);
    const bookingDates = BookingDate({
        roomId,bookingId,startDate,endDate
    })
    return bookingDates.save()
}

module.exports = {
    findBookingDates, findBookingDatesByProperties, saveBookingDates
}