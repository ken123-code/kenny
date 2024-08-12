import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    value: 4
}

const countSlice =createSlice({
    name:"count",
    initialState,
    reducers:{
        countUp(state){
            state.value+=1
        },
        countDown(state){
            state.value-=1
        }
    }
})

export const {countUp, countDown} = countSlice.actions
export default countSlice.reducer;