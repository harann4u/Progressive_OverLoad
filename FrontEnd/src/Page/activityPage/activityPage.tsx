import {  useContext,useEffect, useState } from 'react'
import {ListItem,ListItemText,Button} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useLocalstorage } from '../../localStorage/useLocalStorage';
import { GlobalContent } from '../../data/context/globalcontext';



const ActivityPage = () => {
  const navigate = useNavigate()
  const [showList,setShowList] = useState<string[]>([])
  const {  getItem ,removeItem } = useLocalstorage('ActivityPageData')
  const {updateExerciseList,muscelList,toolList} = useContext(GlobalContent)
 
  const  ChcekedList = () => {
    const checkedtool = toolList.filter((item)=>item.check).map((el)=> el.Name)
    const checkedMuscle = muscelList.filter((item)=>item.check).map((el)=> el.Name)
    if(checkedtool.length > 0 && checkedMuscle.length > 0 ){
        const exerciseList = updateExerciseList.filter((el)=>{
          return checkedMuscle.includes(el.Muscle)
        })
        const listData = exerciseList.filter((el)=>{
          return checkedtool.includes(el.tool)
        })
        const finalList = listData.filter((el)=>el.check).map((el)=>el.Name)
        return finalList
    }else if(checkedtool.length > 0 && checkedMuscle.length <= 0){
        const exerciseList = updateExerciseList.filter((el)=>{
          return checkedtool.includes(el.tool)
        })
        console.log('exerciseList',exerciseList,'checkedtool',checkedtool)
        const finalList = exerciseList.filter((el)=>el.check).map((el)=>el.Name)
        return finalList
    }else{
          const exerciseList = updateExerciseList.filter((el)=>{
            return checkedMuscle.includes(el.Muscle)
          })
          const finalList = exerciseList.filter((el)=>el.check).map((el)=>el.Name)
          return finalList
      }
   
  }
  // const Exercise = ChcekedList()
    let Exercise:string[] = []
     Exercise = getItem()
  
  
  const handleEdit = () => {
   navigate('/Workout')
  }

  return (
    <div>
          <p>Activity page</p>
          {/* {!showList && <p>The data is Empty</p> } */}
          {Exercise ? Exercise.map((item)=>(
              <ListItem >
                  <ListItemText primary={item}/>        
            </ListItem>
            )) : <h1>Go and choose the Exercise</h1>
          }
          <div>
               <Button sx = {{display:'flex',alignItems:'center' }}variant='contained' onClick={()=>handleEdit()} >Edit</Button>
          </div>       
    </div>
    
  )
}

export default ActivityPage
