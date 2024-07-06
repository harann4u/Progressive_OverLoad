import { PayloadAction,createSlice } from "@reduxjs/toolkit"


interface formreduxData{
    set:number,
    kg:number,
    rep:number,
    done:boolean,
  }
  
  interface OverallformData{
    Id:number,
    details:formreduxData[]
    Date:string,
    ExerciseName:string,
    MuscleName:string,
    ToolName:string
  }
  interface useData {
    userInputData:OverallformData[] // array of Objects
  }
  
  const initialStateData:useData = {
    userInputData:[]
  }
  

export const inputPageBoxSlice = createSlice({
    name:'inputPageBoxSlice',
    initialState:initialStateData,
    reducers:{
        userDataInputReducer:(state,action:PayloadAction<OverallformData[]>)=>{
          state.userInputData = action.payload
        }
    }
})

export const {userDataInputReducer} = inputPageBoxSlice.actions
export default inputPageBoxSlice.reducer