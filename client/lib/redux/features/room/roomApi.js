const { apiSlice } = require("../api/apiSlice");

const roomApi = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        getRoomById: builder.query({
            query: (id)=>({
                url:`/rooms/${id}`,
                method:'GET'
            })
        })
    })
})

export const {useGetRoomByIdQuery} = roomApi