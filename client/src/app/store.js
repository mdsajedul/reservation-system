import { api } from "@/features/api/api";
import authSlice from "@/features/auth/authSlice";
import { configureStore } from "@reduxjs/toolkit"; 

export const store = configureStore({
    reducer:{
        [api.reducerPath]:api.reducer,
        auth:authSlice
    },
    middleware: (getDefaultMiddlewares)=> getDefaultMiddlewares().concat(api.middleware)
})