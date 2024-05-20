
import {Button,Chip,Grid,List,ListItem,ListItemText,Checkbox} from '@mui/material';
import { useState,useContext, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import { GlobalContent } from '../../data/context/globalcontext';
import { useNavigate } from 'react-router-dom';
import { useLocalstorage } from '../../helper/localStorage/useLocalstorage';
import { useDispatch,useSelector } from 'react-redux';
import { RootState } from '../../data/redux/store';
import { localStorageListReducer,selectExerciseListReducer, selectMuscleListReducer,selectToolListReducer,finalExerciseReducer } from '../../data/redux/slice/toolAndMuscleSlice';

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
  // const {setLocalStorageState} = useContext(GlobalContent)
  const navigate = useNavigate()
  const classes = useStyles();
  const {  setLocalStorageItem  ,  removeStorageItem } = useLocalstorage('ActivityPageData')
  const overAllDataList = useSelector((state:RootState)=>state.overAllData)
  const muscleStoreList = useSelector((state:RootState)=>state.selectedList.muscleData)
  const toolStoreList = useSelector((state:RootState)=>state.selectedList.ToolData)
  const exerciseStoreList = useSelector((state:RootState)=>state.selectedList.ExerciseList)
  const dispatch = useDispatch()
  
  const initialSetting  = ()=>{
    
      const addCheckExerciseList = overAllDataList.ExerciseList.map((el:jsonType)=>{
           return {...el,check: false}
      })
    
      dispatch(selectExerciseListReducer(addCheckExerciseList))
      dispatch(selectToolListReducer(overAllDataList.ToolData))
      dispatch(selectMuscleListReducer(overAllDataList.muscleData))
  }
 
  const editFunction = ():void => {
     setShowList(filterList(muscleStoreList,toolStoreList)) 
  }


useEffect(()=>{
  const checkedtoolData = toolStoreList.filter((el)=>el.check).map((el)=>el.Name);
  const checkedMuscle = muscleStoreList.filter((el)=>el.check).map((el)=>el.Name);
  (checkedtoolData.length > 0) || (checkedMuscle.length > 0)  ? editFunction():  initialSetting();
},[])

const [showList,setShowList] = useState<jsonType[]>([])

const filterList = (MusclecheckData:ListtDataType[] ,toolcheckData:ListtDataType[]):jsonType[] => {
   
    const checkedtoolData = toolcheckData.filter((el)=>el.check).map((el)=>el.Name)
    const checkedMuscle = MusclecheckData.filter((el)=>el.check).map((el)=>el.Name)
    
   if(checkedtoolData.length > 0 && checkedMuscle.length > 0 ){
            const exerciseList = exerciseStoreList.filter((el)=>{
              return checkedMuscle.includes(el.Muscle)
            })
            const listData = exerciseList.filter((el)=>{
                return checkedtoolData.includes(el.tool)
            })
            // setShowList(listData)
            return listData
    }else if(checkedtoolData.length > 0 && checkedMuscle.length <= 0){
              const exerciseList = exerciseStoreList.filter((el)=>{
                return checkedtoolData.includes(el.tool)
              })
            // setShowList(exerciseList)
            return exerciseList
        }else{
                const exerciseList = exerciseStoreList.filter((el)=>{
                  return checkedMuscle.includes(el.Muscle)
                })
              // setShowList(exerciseList)
              return exerciseList
          }
         
}

  const handleMuscle= (muscleList:ListtDataType):void => {

    const checkedMuscle = muscleStoreList.map((item)=>(
      item.id == muscleList.id ? {...item,check:!item.check}:item)
    )
    dispatch(selectMuscleListReducer(checkedMuscle))
    setShowList(filterList(checkedMuscle,toolStoreList)) 
  
  }
  const handleTool = (tool:ListtDataType)=>{
      const checkedtool = toolStoreList.map((item)=>(
        item.id == tool.id ? {...item,check:!item.check}:item)
      )
      dispatch(selectToolListReducer(checkedtool))
    setShowList(filterList(muscleStoreList,checkedtool)) 
  }

  const handleChooseExercise = (id:number)=> {
     const checkedExercise = showList.map((item)=>(
      item.Id == id ? {...item,check:!item.check}:item)
    )
    setShowList(checkedExercise) // Only Show Data
    const checkingData = exerciseStoreList.map((item)=>(
      item.Id == id ? {...item,check:!item.check}:item)
    )
    dispatch(selectExerciseListReducer(checkingData)) // overAll List
    
  } 

  const handleActivityPage = () =>{
     const finalList = showList.filter((el) => el.check).map((el)=>el.Name)
    //  setFinalExerciseList(finalList)
     dispatch(finalExerciseReducer(finalList))
        if (finalList.length > 0 && finalList) {
          dispatch(localStorageListReducer(finalList))
          setLocalStorageItem(finalList); // setting data in local storage
        }else{
          removeStorageItem()
          dispatch(localStorageListReducer([]))
        }
     navigate('/ActivityPage');
 }

  return (
    <div>
       <Grid container spacing={5}>
            {muscleStoreList.map((element)=>
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
          {toolStoreList.map((element)=>
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
