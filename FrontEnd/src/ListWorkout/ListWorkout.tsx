import React from 'react'
import {Box,Chip,Grid,List,ListItem,ListItemText,Checkbox} from '@mui/material';
const ListWorkout = () => {
  const MusclesData:string[]=["Chest","Shoulder","Leg","Biceps","Triceps","Machine","Dumbbell","Rod"]
  const sampleData:string[]= ["Dumbbell Flat Bench Press","Dumbbell Twisted Fly","Dumbbell One Arm Chest Pres","Dumbbell Incline Around The World","Dumbbell Incline Fly","Dumbbell Pullover"]
  return (
    <div>
      {/* <Box> 
          {MusclesData.map((element)=>
              <Chip label= {element} variant="outlined"  />
          )}
      </Box> */}
       <Grid container spacing={5}>
            {MusclesData.map((element)=>
             <Grid item xs={3}>
              <Chip label= {element} variant="outlined"  />
              </Grid>
          )}
      </Grid>
      <Grid container spacing={5} sx ={{marginTop:"80px",display:"flex",justifyContent:'center'}}>
          <List>
             {sampleData.map((item,index)=>(
              <ListItem key={index}>
                  <ListItemText primary={item}/>
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
