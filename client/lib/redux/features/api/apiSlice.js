import { baseUrl } from "@/lib/config";
import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const apiSlice = createApi({
    reducerPath:"api",
    baseQuery: fetchBaseQuery({
        baseUrl:baseUrl,
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