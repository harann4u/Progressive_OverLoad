import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './slice/counterSlice'
import  overAllDatareducer  from "./slice/overalldataslice";
import selectedList from "./slice/toolAndMuscleSlice"

export const store = configureStore({
    reducer:{
        // counter:counterReducer,
        overAllData:overAllDatareducer,
        selectedList:selectedList
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch