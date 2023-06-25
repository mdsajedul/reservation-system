import { userLoggedIn } from "@/features/auth/authSlice";
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";

const  useAuthCheck = ()=>{
    const [authChecked,setAuthChecked] = useState(false);
    const dispatch = useDispatch();

    useEffect(()=>{
        const localAuth = localStorage.getItem('auth');
        if(localAuth){
            const auth = JSON.parse(localAuth);
            if(auth.token && auth.user){
                dispatch(userLoggedIn({
                    token: auth.token,
                    user: auth.user
                }))
            }
        }
        setAuthChecked(true)
    },[dispatch,setAuthChecked])

    return authChecked;
}

export default useAuthCheck