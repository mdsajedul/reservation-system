const { apiSlice } = require("../api/apiSlice");


const bookingApi = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        postBooking: builder.mutation({
            query:(data)=>({
                url:'booking',
                method:'POST',
                body:data
            })
        })
    })
})

export const {usePostBookingMutation} = bookingApi