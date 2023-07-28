import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const apiSlice = createApi({
    reducerPath:"api",
    baseQuery: fetchBaseQuery({
        baseUrl:'http://localhost:4444/api/v1',
        prepareHeaders: async (headers,{getState,endPoint})=>{
            const token = getState()?.auth?.toekn;
            if(token){
                headers.set('Authorization',`Bearer ${token}`)
            }
            return headers;
        }
    }),
    endpoints:(builder)=>({})
})