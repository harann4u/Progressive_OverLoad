
import {Button,Chip,Grid,List,ListItem,ListItemText,Checkbox} from '@mui/material';
import { ExerciseList } from '../../data/mockJson/exerciselist';
import { useState,useContext, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import { GlobalContent } from '../../data/context/globalcontext';
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
  const {setupdateExerciseList,updateExerciseList,muscelList,setMuscleList,toolList,setToolList} = useContext(GlobalContent)
  const navigate = useNavigate()
  const classes = useStyles();
 

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  const editFunction = ():void => {
    console.log('Edit dunction')
    filterList(muscelList,toolList)
  }
useEffect(()=>{
  const checkedtoolData = toolList.filter((el)=>el.check).map((el)=>el.Name);
  const checkedMuscle = muscelList.filter((el)=>el.check).map((el)=>el.Name);
  (checkedtoolData.length > 0) || (checkedMuscle.length > 0)  ? editFunction(): false;
},[])

const [showList,setShowList] = useState<jsonType[]>([])

const filterList = (MusclecheckData:ListtDataType[] ,toolcheckData:ListtDataType[]) => {
   
    const checkedtoolData = toolcheckData.filter((el)=>el.check).map((el)=>el.Name)
    const checkedMuscle = MusclecheckData.filter((el)=>el.check).map((el)=>el.Name)
   if(checkedtoolData.length > 0 && checkedMuscle.length > 0 ){
            const exerciseList = updateExerciseList.filter((el)=>{
              return checkedMuscle.includes(el.Muscle)
            })
            const listData = exerciseList.filter((el)=>{
                return checkedtoolData.includes(el.tool)
            })
            setShowList(listData)
    }else if(checkedtoolData.length > 0 && checkedMuscle.length <= 0){
              const exerciseList = updateExerciseList.filter((el)=>{
                return checkedtoolData.includes(el.tool)
              })
            setShowList(exerciseList)
        }else{
                const exerciseList = updateExerciseList.filter((el)=>{
                  return checkedMuscle.includes(el.Muscle)
                })
              setShowList(exerciseList)
          }
}

  const handleMuscle= (muscleList:ListtDataType):void => {

    const checkedMuscle = muscelList.map((item)=>(
      item.id == muscleList.id ? {...item,check:!item.check}:item)
    )
    setMuscleList(checkedMuscle)
    filterList(checkedMuscle,toolList)
  
  }
  const handleTool = (tool:ListtDataType)=>{
      const checkedtool = toolList.map((item)=>(
        item.id == tool.id ? {...item,check:!item.check}:item)
      )
      setToolList(checkedtool)
      filterList(muscelList,checkedtool)
  }

  const handleChooseExercise = (id:number)=> {
     const checkedExercise = showList.map((item)=>(
      item.Id == id ? {...item,check:!item.check}:item)
    )
    setShowList(checkedExercise) // Only Show Data
    const checkingData = updateExerciseList.map((item)=>(
      item.Id == id ? {...item,check:!item.check}:item)
    )
    setupdateExerciseList(checkingData) // overAll List
    
  } 

  const handleActivityPage = () =>{
     const finalList = showList.filter((el) => el.check)
     console.log('finalist',finalList)
     setShowList(finalList)
     navigate('/ActivityPage');


 }

  return (
    <div>
       <Grid container spacing={5}>
            {muscelList.map((element)=>
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
          {toolList.map((element)=>
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
