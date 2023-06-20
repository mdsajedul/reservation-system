
import useAuth from "@/hooks/useAuth"
import { useEffect } from "react";
import {  useNavigate } from "react-router-dom";

const PrivateRoute =({children})=>{
    const navigate = useNavigate()
    const isLoggedIn = useAuth();
    useEffect(()=>{
        if(!isLoggedIn){
            navigate('/auth/sign-in')
        }
    },[])
    console.log(isLoggedIn);
    return isLoggedIn ? children : navigate('/auth/sign-in')
}

export default PrivateRoute