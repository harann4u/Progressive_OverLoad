import  { useEffect ,useContext} from 'react'
import axios from 'axios'
import { GlobalContent } from '../../data/context/globalcontext'
import { ExerciseDataType } from '../../data/context/Interface'
import { Endpoints } from '../../helper/endpoint'
import { useLocalstorage } from '../../helper/localStorage/useLocalstorage'

const Appinitialize = ({children}:any) => {
  const {setMuscleList,setToolList,setupdateExerciseList,finalExerciseList,locatStoageState,setLocalStorageState} = useContext(GlobalContent)
  const {   getLocalStorageItem  } = useLocalstorage('ActivityPageData') 
  
  const fetchData = async () => {
        const response =  await axios.get(Endpoints.ExerciseFullList)
        setToolList(response.data.ToolData)
        setMuscleList(response.data.muscleData)
        const updatedList = response.data.ExerciseList.map((el:ExerciseDataType)=>{
            return {...el,check:false}
        })
        setupdateExerciseList(updatedList)
   }
   const fetchLocalStorage = ()=>{
    let Exercise:string[] =  getLocalStorageItem();
    Exercise?.length ?  setLocalStorageState(Exercise) :  setLocalStorageState([])
  }
    useEffect(()=>{
      fetchData()
      fetchLocalStorage()
    },[])

  return (
    <div>
      {children}
    </div>
  )
}

export default Appinitialize
