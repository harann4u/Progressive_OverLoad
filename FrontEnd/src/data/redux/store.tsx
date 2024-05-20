import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './slice/counterSlice'
import { overAllDatareducer } from "./slice/overalldataslice";

export const store = configureStore({
    reducer:{
        counter:counterReducer,
        overAllData:overAllDatareducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch