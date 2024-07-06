import {  useContext,useEffect, useState } from 'react'
import {ListItem,ListItemText,Button} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useLocalstorage } from '../../helper/localStorage/useLocalstorage';
// import { GlobalContent } from '../../data/context/globalcontext';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../data/redux/store';
import './activityPage.css'
import InputBoxTable from '../../figma/inputboxtable/inputBoxTable';
import { ContactSupportOutlined } from '@mui/icons-material';
import { ExerciseDataType } from '../../data/context/Interface';
import {userDataInputReducer} from '../../data/redux/slice/inputpageBoxSlice'


interface formreduxData{
  set:number,
  kg:number,
  rep:number,
  done:boolean,
}

interface OverallformData{
  Id:number,
  details:formreduxData[],
  Date:string,
  ExerciseName:string,
  MuscleName:string,
  ToolName:string
}

const ActivityPage = () => {
  
  const dispatch = useDispatch()
  const finalExerciseListdata = useSelector((state:RootState) => state.selectedList.finalexercise)
  const localStoragelistData = useSelector((state:RootState) => state.selectedList.localStorage)
  const navigate = useNavigate()
  let Exercise:ExerciseDataType[] = finalExerciseListdata?.length ? finalExerciseListdata : localStoragelistData;
  Exercise = Exercise || []
  const [selectExercise,setSelectExercise] = useState('')
  const [timeOfDay,setTimeOfDay] = useState<string>('')
  const [Exid,setExId] = useState<number>(Exercise[0]?.Id || 0)
  const [rowCount ,setRowCount]  = useState<number>(1)
  const [inputData,setInputData] = useState<OverallformData[]>([{
    Id:0,
    details:[],
    Date:'',
    ExerciseName:'',
    MuscleName:'',
    ToolName:''
  }])
 

  const handleEdit = () => {
    navigate('/Workout')
  }


  const handleSelectExercise = (e:any) => {
      const selectedData = Exercise.filter((el) => el.Id == e.target.value).map((el)=> el.Name).flat()
      const selectedId = Exercise.filter((el) => el.Id == e.target.value).map((el)=> el.Id).flat()
      setExId(selectedId[0])
      setSelectExercise(selectedData[0])
      setRowCount(1)
 }
 const now = new Date().toDateString()
 const updateTimeOfDay = () => {
    const now = new Date()
    const hours = now.getHours();
    if(hours < 12){
      setTimeOfDay('Morning')
    }else if (hours < 18){
      setTimeOfDay('AfterNoon')
    }else {
      setTimeOfDay('Evening')
    }
 }

 const intializeTheData = ()=>{
 
     if(Exercise.length > 0 && Exercise){
            const selectedData = Exercise[0].Name
            const selectedId = Exercise[0].Id
            setExId(selectedId)
            setSelectExercise(selectedData)
            
        const retData:any[] = Exercise.map((el)=>{
            return {
              Id:el.Id,
              details:[],
              Date:now,
              ExerciseName:el.Name,
              MuscleName:el.Muscle,
              ToolName:el.tool
            }
        }) 
        setInputData(retData)
  }

 }

  useEffect(()=>{
      updateTimeOfDay()
      intializeTheData()
  },[])
 const handleNewSet = () =>{
    setRowCount(rowCount+1)
 }
 const GetDataFromInput = (arg:formreduxData[]) => {
       
       const filerArg = arg.filter((el)=>el.done) // filer the Argument which is done
       const retData = inputData.map((el)=>(
         Exid === el.Id ? {...el,details:filerArg} : el 
       ))
       console.log('retData',retData)
       setInputData(retData)
 }
 
 const handleAddExercise = ()=>{
    dispatch(userDataInputReducer(inputData))
    
 }

  return (
    Exercise && Exercise.length > 0 && <div className='ActivityPage'>
      <div className='ActivityPage_Container'>
              <div className='Exercise_selectOption'>
                    <select name="Exercise_List" id="" onChange={(e)=>handleSelectExercise(e)}>
                        {
                          Exercise.map((el)=>(
                              <option value={el.Id}>{el.Name}</option>
                          ))
                        }
                      </select>
                      <div className='Edit_Button'>
                          <Button sx = {{display:'flex',alignItems:'center' }}variant='contained' onClick={()=>handleEdit()}  >Edit</Button>
                      </div>
              </div>
              <div className='Time_ExerciseName'>
                    <div className='Time_Schedule'>
                        <h3>{timeOfDay} Workout</h3>
                    </div>
                    <div className='exercise_Name'>
                          <h3>{selectExercise}</h3>
                          <div className='Add_set'>
                              <Button sx = {{display:'flex',alignItems:'center' }}variant='contained' onClick={()=>handleNewSet()} >Add New Set</Button>
                          </div>
                    </div>
              </div>
              <InputBoxTable  rowCount = {rowCount} GetDataFromInput = {GetDataFromInput} selectExercise = {selectExercise} ExId={ Exid}/>
              <div className='Add_cancel_button'>
                   <Button sx = {{display:'flex',alignItems:'center' }}variant='contained'  onClick={()=>handleAddExercise()}>Add Exercise</Button>
                   <Button sx = {{display:'flex',alignItems:'center' }}variant='contained'  >Cancel Exercise</Button>
              </div>
      </div>
        
</div>
   
    
  )
}

export default ActivityPage
