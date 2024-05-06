
import {Chip,Grid,List,ListItem,ListItemText,Checkbox} from '@mui/material';
import jsonData from '../Data/MockJson/ExerciseList.json'
import { useState } from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  enableChips:{
    backgroundColor: '#06d6a0', 
    color: 'white',
  },
  disableChips:{
    backgroundColor: 'white', 
    color: 'black',
  }
})

type MuscleNameList = {
  id:number,
   Name:string,
   check:boolean
}

const ListWorkout = () => {
  const [MusclesData,setMusclesData] = useState<MuscleNameList[]>([
    {'id':1,'Name':'Chest','check':false},
    {'id':2,'Name':'Back','check':false},
    {'id':3,'Name':'Shoulder','check':false},
    {'id':4,'Name':'Leg','check':false},
    {'id':5,'Name':'Biceps','check':false},
    {'id':6,'Name':'Triceps','check':false},
    {'id':7,'Name':'Machine','check':false},
    {'id':8,'Name':'Dumbbell','check':false},
    {'id':9,'Name':'Rod','check':false},
  ])
  const classes = useStyles();

  const handleClick = (id:number):void => {
    console.log('name',id)
      const checkedMuscle = MusclesData.map((item)=>(
          item.id == id ? {...item,check:!item.check}:item)
        )
      setMusclesData(checkedMuscle)
  };

  return (
    <div>
       <Grid container spacing={5}>
            {MusclesData.map((element,index)=>
             <Grid item xs={3}>
              {/* <button onClick={toggleEnabled}>Toggle</button>  */}
              <Chip  
                key= {element.id}
                label= {element.Name} 
                variant="outlined"
                className={element.check ? classes.enableChips : classes.disableChips}
                // clickable={Enable} // Make the chip clickable only if it's enabled
                // disabled={!Enable} // Disable the chip if it's not enabled
                onClick={()=>handleClick(element.id)}
              />
              </Grid>
          )}
      </Grid>
      <Grid container spacing={5} sx ={{marginTop:"80px",display:"flex",justifyContent:'center'}}>
          <List>
             {jsonData.map((item,index)=>(
              <ListItem key={index}>
                   <ListItemText primary={item.Name}/>
                  <Checkbox/>
            </ListItem>
             ))
             }
          </List>
      </Grid>
    </div>
  )
}

export default ListWorkout
