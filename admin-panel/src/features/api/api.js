import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
 
export const api = createApi({
    reducerPath:'api',
    baseQuery: fetchBaseQuery({
        baseUrl:'http://localhost:4444/api/v1',
        prepareHeaders:async (headers,{getState,endpoint})=>{
            const token = getState()?.auth?.token;
            if(token){
                headers.set('Authorization', `Bearer ${token}`)
            }
            headers.set('Content-Type','application/json')
            return headers
        }
    }),
    endpoints:(builder)=>({})
})