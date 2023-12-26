import { api } from "../api/api";


export const hotelsApi = api.injectEndpoints({
    endpoints: (builder)=>({
        getHotels: builder.query({
            query:()=>({
                url:'hotels',
                method:'GET',
            }),
        }),

        getHotelById: builder.query({
            query:(id)=>({
                url:`hotels/${id}`,
                method:'GET'
            })
        }),

        getRoomsByHotelId: builder.mutation({
            query:(id)=>({
                url:`/hotels/${id}/rooms`,
                method:'GET'
            })
        })
    })
})

export const {useGetHotelsQuery, useGetHotelByIdQuery, useGetRoomsByHotelIdMutation} = hotelsApi