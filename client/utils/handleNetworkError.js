
export const handleNetworkError = (error,router)=>{
    if(error?.status==='FETCH_ERROR'){
        throw error;
    }else{
        if(error?.status===401){
           router.push('/user/auth')
        }else if(error?.status===500){
            throw error;
        }
    }
}