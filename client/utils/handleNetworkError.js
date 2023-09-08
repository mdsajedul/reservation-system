
export const handleNetworkError = (error)=>{
    if(error?.status==='FETCH_ERROR'){
        throw error;
    }else{
        if(error?.status===401){
            window.location.href = '/user/auth';
        }else if(error?.status===500){
            throw error;
        }
    }
}