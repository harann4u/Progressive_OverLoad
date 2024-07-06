import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ExerciseDataType,muscleDataType,toolDataType} from "../../context/Interface";



interface overallDataType {
    ExerciseList:ExerciseDataType[],
    muscleData:muscleDataType[],
    ToolData:toolDataType[],
    finalexercise:ExerciseDataType[],
    localStorage:ExerciseDataType[]
}

const overAllInitialData:overallDataType= {
    ExerciseList:[],
    muscleData:[],
    ToolData:[],
    finalexercise:[],
    localStorage:[]
}

export const toolAndMuscleAndExerciseSlice = createSlice({
    name:'toolAndMuscleSlice',
    initialState:overAllInitialData,
    reducers:{
        selectMuscleListReducer:(state,action:PayloadAction<muscleDataType[]>)=>{
           state.muscleData = action.payload
        },
        selectToolListReducer:(state,action:PayloadAction<toolDataType[]>)=>{
            state.ToolData = action.payload
        },
        selectExerciseListReducer:(state,action:PayloadAction<ExerciseDataType[]>) => {
            state.ExerciseList = action.payload
        },
        finalExerciseReducer:(state,action:PayloadAction<ExerciseDataType[]>)=>{
            state.finalexercise = action.payload 
        },
        localStorageListReducer:(state,action:PayloadAction<ExerciseDataType[]>)=>{
            state.localStorage = action.payload
        }
    }
})

export const {selectMuscleListReducer,selectToolListReducer,selectExerciseListReducer,finalExerciseReducer,localStorageListReducer} = toolAndMuscleAndExerciseSlice.actions
export default  toolAndMuscleAndExerciseSlice.reducer