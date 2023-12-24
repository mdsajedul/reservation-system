import { api } from "../api/api";


export const hotelsApi = api.injectEndpoints({
    endpoints: (builder)=>({
        getHotels: builder.query({
            query:(data)=>({
                url:'hotels',
                method:'GET',
            }),
        }),
    })
})

export const {useGetHotelsQuery} = hotelsApi