import React, { useEffect ,useContext} from 'react'
import axios from 'axios'
import { GlobalContent } from '../../data/context/globalcontext'
import { ExerciseDataType } from '../../data/context/Interface'

const Appinitialize = ({children}:any) => {
  const {setMuscleList,setToolList,setupdateExerciseList} = useContext(GlobalContent)
   const fetchData = async () => {
        const response =  await axios.get('https://mocki.io/v1/1100a2b2-c64e-4b0f-bfe0-948b4fa470ce')
        setToolList(response.data.ToolData)
        setMuscleList(response.data.muscleData)
        const updatedList = response.data.ExerciseList.map((el:ExerciseDataType)=>{
            return {...el,check:false}
        })
        setupdateExerciseList(updatedList)
   }
    useEffect(()=>{
      fetchData()
    },[])

  return (
    <div>
      {children}
    </div>
  )
}

export default Appinitialize
