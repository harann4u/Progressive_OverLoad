import { PayloadAction,createSlice } from "@reduxjs/toolkit";
import { number } from "zod";

interface counterState{
    value:number
}

const intialCounter:counterState = {
    value:10
}

const counterSlice = createSlice({
    name: "counter",
    initialState: intialCounter,
    reducers: {
        increment:(state) => {
            state.value+=1
        },
        decrement:( state) => {
            state.value-=1
        },
        incrementByAmount:(state,action:PayloadAction<number>) =>{
            state.value+=action.payload
        }
    }
})

export const {increment,decrement,incrementByAmount} = counterSlice.actions
export default counterSlice.reducer