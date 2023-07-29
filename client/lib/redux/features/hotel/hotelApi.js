import { apiSlice } from "../api/apiSlice";
import { setError, setLoading, storeAllHotel } from "./hotelSlice";

const hotelApi = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        getHotels: builder.mutation({
            query:(data)=>({
                url:'/hotels',
                method:'GET'
            }),
            async onQueryStarted(arg,{queryFulfilled,dispatch}){
                dispatch(setLoading(true))
                try {
                    const result = await queryFulfilled;
                    dispatch(storeAllHotel(result.data))
                } catch (error) {
                    dispatch(setError(error))
                }
            }
        }),
        getHotelById: builder.query({
            query: (id)=>({
                url:`hotels/${id}`,
                method:'GET'
            })
        }),
        getRoomsByHotelId: builder.query({
            query:(id)=>({
                url:`/hotels/${id}/rooms`,
                method:'GET'
            })
        })
    })
})

export const {useGetHotelByIdQuery,useGetHotelsMutation,useGetRoomsByHotelIdQuery} = hotelApi