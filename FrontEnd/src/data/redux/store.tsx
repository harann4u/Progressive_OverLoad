import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './slice/counterSlice'
import  overAllDatareducer  from "./slice/overalldataslice";
import selectedList from "./slice/toolAndMuscleSlice"
import  userInputData from './slice/inputpageBoxSlice'

export const store = configureStore({
    reducer:{
        // counter:counterReducer,
        overAllData:overAllDatareducer,
        selectedList:selectedList,
        userInputPage:userInputData
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch