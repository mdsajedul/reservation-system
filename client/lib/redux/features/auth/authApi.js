import { apiSlice } from "../api/apiSlice";
import jwt_decode from "jwt-decode"
import { userLoggedIn } from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        register: builder.mutation({
            query: (data)=>({
                url:'/auth/register',
                method:'POST',
                body:data
            })
        }),

        login: builder.mutation({
            query:(data)=>({
                url:'/auth/login',
                method:'POST',
                body:data
            }),
            async onQueryStarted(arg,{queryFulfilled,dispatch}){
                try{
                    const result = await queryFulfilled;
                    const token = result?.data?.token;
                    const payload = jwt_decode(token);
                    const accept = ['User'];
                    if(accept.some(user=> payload?.roles?.includes(user))){
                        localStorage.setItem('auth', JSON.stringify({
                            token:  token,
                            user: payload
                        }))
                        dispatch(userLoggedIn({
                            token: token,
                            user: payload
                        }))
                    }
                }
                catch(err){
                    throw err
                }
            }
        })  
    })
})

export const {useLoginMutation,useRegisterMutation} = authApi