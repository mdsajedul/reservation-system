const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    hotels: [],
    hotel:{},
    error:'',
    isLoading:false
}

const hotelSlice = createSlice({
    name:'hotels',
    initialState,
    reducers: {
        storeAllHotel: (state,action)=>{
            state.isLoading = false
            state.hotels = action.payload;
        },
        setError:(state,action)=>{
            state.isLoading= false
            state.error=action.payload
        },
        setLoading:(state,action)=>{
            state.isLoading=action.payload
        }
    }
})

export const {storeAllHotel,setError,setLoading} = hotelSlice.actions;
export default hotelSlice.reducer;