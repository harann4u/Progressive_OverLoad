import { createSlice,PayloadAction  } from "@reduxjs/toolkit";
import { ExerciseDataType,muscleDataType,toolDataType } from "../../context/Interface";



interface overallDataType {
    ExerciseList:ExerciseDataType[],
    muscleData:muscleDataType[],
    ToolData:toolDataType[]
}

const overAllInitialData:overallDataType= {
    ExerciseList:[],
    muscleData:[],
    ToolData:[]
}


export const overAllDataSlice = createSlice({
    name:'overAlldataSlice',
    initialState:overAllInitialData,
    reducers:{
            overAllDatareducer:(state,action:PayloadAction<overallDataType>) =>{
                console.log("If dbvidhbi")
                const {ExerciseList,muscleData,ToolData} = action.payload
                if(ExerciseList)
                    state.ExerciseList = ExerciseList
                if(muscleData)
                    state.muscleData = muscleData
                if(ToolData)
                    state.ToolData = ToolData
            }
    }
})

export const {overAllDatareducer} = overAllDataSlice.actions
export default overAllDataSlice.reducer