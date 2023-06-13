
const { eachDayOfInterval, format } = require('date-fns')

const datesFromStartEndDates = (startDate, endDate) =>{
     startDate = new Date(startDate)
     endDate = new Date(endDate)

    const allDates = eachDayOfInterval({start: startDate, end: endDate}).map(date=>{
        return format(date, 'yyyy-MM-dd')
    })
    return allDates
}

module.exports = datesFromStartEndDates