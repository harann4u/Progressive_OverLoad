
import {Button,Chip,Grid,List,ListItem,ListItemText,Checkbox} from '@mui/material';
import { ExerciseList } from '../../data/mockJson/exerciselist';
import { useState } from 'react';
import { makeStyles } from '@mui/styles';

import { useNavigate } from 'react-router-dom';

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

type ListtDataType = {
  id:number,
   Name:string,
   check:boolean
}

type jsonType = {
    "Id": number,
		"Name": string,
		"Muscle":string,
		"tool": string,
    "check":boolean
}

const ListWorkout = () => {
  const newList = ExerciseList.map((el)=>{
      return {...el,check:false}
  })
  
  
  const [UpdateExerciseList,setUpdateExerciseList] = useState<jsonType[]>(newList)
  const navigate = useNavigate()
  const classes = useStyles();
  const [MusclesData,setMusclesData] = useState<ListtDataType[]>([
    {'id':1,'Name':'Chest','check':false},
    {'id':2,'Name':'Back','check':false},
    {'id':3,'Name':'Shoulder','check':false},
    {'id':4,'Name':'Leg','check':false},
    {'id':5,'Name':'Biceps','check':false},
    {'id':6,'Name':'Triceps','check':false},
  ])
   
  const [toolData,settoolData] = useState<ListtDataType[]>([
    {'id':1,'Name':'Machine','check':false},
    {'id':2,'Name':'Dumbbell','check':false},
    {'id':3,'Name':'Rod','check':false}
])

  const [showList,setShowList] = useState<jsonType[]>([])
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const filterList = (MusclecheckData:ListtDataType[] ,toolcheckData:ListtDataType[])=>{
     
      const checkedtoolData = toolcheckData.filter((el)=>el.check).map((el)=>el.Name)
      const checkedMuscle = MusclecheckData.filter((el)=>el.check).map((el)=>el.Name)

   if(checkedtoolData.length > 0 && checkedMuscle.length > 0 ){
              const exerciseList = UpdateExerciseList.filter((el)=>{
                return checkedMuscle.includes(el.Muscle)
              })
              const listData = exerciseList.filter((el)=>{
                 return checkedtoolData.includes(el.tool)
              })
              setShowList(listData)
        }else if(checkedtoolData.length > 0 && checkedMuscle.length <= 0){
              const exerciseList = UpdateExerciseList.filter((el)=>{
                return checkedtoolData.includes(el.tool)
              })
            setShowList(exerciseList)
        }else{
              const exerciseList = UpdateExerciseList.filter((el)=>{
                return checkedMuscle.includes(el.Muscle)
              })
            setShowList(exerciseList)
        }
}

  const handleMuscle= (muscleList:ListtDataType):void => {

    const checkedMuscle = MusclesData.map((item)=>(
      item.id == muscleList.id ? {...item,check:!item.check}:item)
    )
    setMusclesData(checkedMuscle)
    filterList(checkedMuscle,toolData)
  
  }
  const handleTool = (tool:ListtDataType)=>{
      const checkedtool = toolData.map((item)=>(
        item.id == tool.id ? {...item,check:!item.check}:item)
      )
      settoolData(checkedtool)
      filterList(MusclesData,checkedtool)
  }

  const handleChooseExercise = (id:number)=> {
     const checkedExercise = showList.map((item)=>(
      item.Id == id ? {...item,check:!item.check}:item)
    )
    setShowList(checkedExercise)
    const checkingData = UpdateExerciseList.map((item)=>(
      item.Id == id ? {...item,check:!item.check}:item)
    )
    setUpdateExerciseList(checkingData)
    
  }

  const handleActivityPage = () =>{
     const finalList = showList.filter((el) => el.check)
     console.log('finalist',finalList)
     navigate('/ActivityPage', {state:finalList});

 }

  return (
    <div>
       <Grid container spacing={5}>
            {MusclesData.map((element)=>
             <Grid item xs={3}>
              <Chip  
                key= {element.id}
                label= {element.Name} 
                variant="outlined"
                className={element.check ? classes.enableChips : classes.disableChips}
                onClick={()=>handleMuscle(element)}
              />
              </Grid>
          )}
          {toolData.map((element)=>
             <Grid item xs={3}>
              <Chip  
                key= {element.id}
                label= {element.Name} 
                variant="outlined"
                className={element.check ? classes.enableChips : classes.disableChips}
                onClick={()=>handleTool(element)}
              />
              </Grid>
          )}
      </Grid>
      <Grid container spacing={5} sx ={{marginTop:"80px",display:"flex",justifyContent:'center'}}>
          <List>
             {showList.map((item,index)=>(
                  <ListItem key={index}>
                      <ListItemText primary={item.Name}/>
                      <ListItemText primary={item.Muscle}/>
                      <ListItemText primary={item.tool}/>
                      <Checkbox
                        checked= {item.check}
                        onChange={()=>handleChooseExercise(item.Id)}
                      />
                </ListItem>
                ))
             }
          </List>
      </Grid>
          <div>
               <Button sx = {{display:'flex',alignItems:'center' }}variant='contained' onClick={()=>handleActivityPage()}>Start</Button>
          </div>       
    </div>
  )
}

export default ListWorkout
