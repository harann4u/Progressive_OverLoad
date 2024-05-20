import { createSlice  } from "@reduxjs/toolkit";

 interface muscleDataType {
    "id":number,
    "Name" :string,
    "check":boolean
}

 interface toolDataType {
    "id":number,
    "Name" :string,
    "check":boolean
}

 interface ExerciseDataType {
    "Id": number,
	"Name": string,
	"Muscle":string,
	"tool": string,
}

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

console.log("Overalldata Slice")

export const overAllDataSlice = createSlice({
    name:'overAlldataSlice',
    initialState:overAllInitialData,
    reducers:{
            overAllDatareducer:(state,action) =>{
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