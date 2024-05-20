import {  useContext,useEffect, useState } from 'react'
import {ListItem,ListItemText,Button} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useLocalstorage } from '../../helper/localStorage/useLocalstorage';
import { GlobalContent } from '../../data/context/globalcontext';



const ActivityPage = () => {
  const {finalExerciseList,localStorageState} = useContext(GlobalContent)
  const navigate = useNavigate()
  console.log('dgvkdgk',localStorageState)
  let Exercise:string[] = finalExerciseList?.length ? finalExerciseList : localStorageState;
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
