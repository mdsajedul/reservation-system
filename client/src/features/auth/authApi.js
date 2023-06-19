// import { decodeJWT } from "@/utils/decodeJWT";
import { api } from "../api/api";
import jwt_decode from "jwt-decode"



export const authApi = api.injectEndpoints({
    endpoints: (builder)=>({
        login: builder.mutation({
            query:(data)=>({
                url:'auth/login',
                method:'POST',
                body: data
            }),
            async onQueryStarted(arg,{queryFulfilled,dispatch}){
                try{
                    const result = await queryFulfilled;
                    const token = result?.data?.token;
                    const payload = jwt_decode(token);
                    const accept = ['Admin','Agent'];
                    if(accept.some(user=> payload?.roles?.includes(user))){
                        localStorage.setItem('auth', JSON.stringify({
                            token:  token,
                            user: payload
                        }))
                    }
                    console.log(payload.roles);
                }
                catch(err){
                    console.log(err);
                }
            }
        }),
        register: builder.mutation({
            query: (data)=>({
                url:'auth/register',
                method: 'POST',
                body: data
            }),
            
        })
    })
})

export const {useLoginMutation,useRegisterMutation} = authApi