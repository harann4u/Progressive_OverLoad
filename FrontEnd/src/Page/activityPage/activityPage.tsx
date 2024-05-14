import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import {List,ListItem,ListItemText,Button} from '@mui/material';
import { GlobalContent } from '../../data/context/globalcontext';
import { useNavigate } from 'react-router-dom';


const ActivityPage = () => {
  const {updateExerciseList,muscelList,toolList} = useContext(GlobalContent)
  const navigate = useNavigate()
 
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
  const Exercise = ChcekedList()
  
  const handleEdit = () => {
   navigate('/Workout')
  }

  return (
    <div>
          <p>Activity page</p>
          {Exercise.map((item)=>(
              <ListItem >
                  <ListItemText primary={item}/>
                  
            </ListItem>
            ))
          }
          <div>
               <Button sx = {{display:'flex',alignItems:'center' }}variant='contained' onClick={()=>handleEdit()} >Edit</Button>
          </div>       
    </div>
    
  )
}

export default ActivityPage
