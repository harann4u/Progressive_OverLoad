import { createContext, useContext } from "react";
import { SampleData } from "../App";

export const DashBoardContext = createContext<SampleData|undefined>(undefined)

export function useDashboardContext(){
    const SampleData = useContext(DashBoardContext)
    if(SampleData === undefined){
        throw new Error('UseDashBoardContext must be used with a DashBoardContext')
    }
    return SampleData
}