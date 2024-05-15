import {  useContext,useEffect, useState } from 'react'
import {ListItem,ListItemText,Button} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useLocalstorage } from '../../helper/localStorage/useLocalstorage';
import { GlobalContent } from '../../data/context/globalcontext';



const ActivityPage = () => {
  const {finalExerciseList} = useContext(GlobalContent)
  const navigate = useNavigate()
  const {   getLocalStorageItem  } = useLocalstorage('ActivityPageData')

  // if(finalExerciseList.length > 0 && finalExerciseList){
  //   Exercise = finalExerciseList
  // }else{
  //   Exercise = getLocalStorageItem()
  // }
  let Exercise:string[] = finalExerciseList?.length ? finalExerciseList : getLocalStorageItem();
  
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
