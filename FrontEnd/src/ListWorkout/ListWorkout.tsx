
import {Chip,Grid,List,ListItem,ListItemText,Checkbox} from '@mui/material';
import jsonData from '../Data/MockJson/ExerciseList.json'
import { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { boolean, set } from 'zod';

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
		"tool": string
}

const ListWorkout = () => {
  const classes = useStyles();
  const [MusclesData,setMusclesData] = useState<ListtDataType[]>([
    {'id':1,'Name':'Chest','check':false},
    {'id':2,'Name':'Back','check':false},
    {'id':3,'Name':'Shoulder','check':false},
    {'id':4,'Name':'Leg','check':false},
    {'id':5,'Name':'Biceps','check':false},
    {'id':6,'Name':'Triceps','check':false},
  ])
   
  const [tooData,settoolData] = useState<ListtDataType[]>([
    {'id':1,'Name':'Machine','check':false},
    {'id':2,'Name':'Dumbbell','check':false},
    {'id':3,'Name':'Rod','check':false}
])

  const [selectedMuscle,setSelectMuscle] = useState<boolean>(false)
  const [selectedTool,setSelectedTool] = useState<boolean>(false)
  const [showList,setShowList] = useState<jsonType[]>([])
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  const handleMuscle= (muscleList:ListtDataType):void => {
    console.log("handleMuscle")
      const checkedMuscle = MusclesData.map((item)=>(
          item.id == muscleList.id ? {...item,check:!item.check}:item)
        )
      setMusclesData(checkedMuscle)
      
      let filterData:jsonType[]
      let whoelData:jsonType[] = []
      checkedMuscle.forEach((item)=>{
          if(item.check){
            filterData =  jsonData.filter((jsonElement)=>{
              if(jsonElement.Muscle == item.Name){
                 return item
              }
            })
            whoelData = [...whoelData,...filterData]
          }          
      })  
     const booleanData = checkedMuscle.every((item)=> item.check === false)
      if(booleanData == false){
        showListFilteration(whoelData,true,"Muscle")
      }else{
        showListFilteration(whoelData,false,"Muscle")
      }
      
     
  }
  // +++++++++++++++++++++++++++++++++++++++++++++++++++++++
   const handleTool = (tool:ListtDataType) =>{
          // console.log("Handletoo")
          const checkedtool = tooData.map((item)=>(
            item.id == tool.id ? {...item,check:!item.check}:item)
          )
          settoolData(checkedtool)

          let filterData:jsonType[]
          let whoelData:jsonType[] = []
          checkedtool.forEach((item)=>{
              if(item.check){
                filterData =  jsonData.filter((jsonElement)=>{
                  if(jsonElement.tool == item.Name){
                     return item
                  }
                })
                whoelData = [...whoelData,...filterData]
              }          
          })  
          const booleanData = checkedtool.every((item)=> item.check === false)
          if(booleanData == false){
            showListFilteration(whoelData,true,"Muscle")
          }else{
            showListFilteration(whoelData,false,"Muscle")
          }
  }
     
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  const showListFilteration = (arg:jsonType[],booleanData:boolean,whichData:string)=>{
    console.log('arg',arg,' boolean',booleanData)
    let muscleBoolean:boolean = false
    let toolBoolean:boolean = false
    if(whichData == "Muscle"){
      muscleBoolean = booleanData;
    }else{
      toolBoolean = booleanData;
    }
   

    if((muscleBoolean) && (!toolBoolean)){
        setShowList([...arg])
    }else if((!muscleBoolean) && (!toolBoolean)){
      setShowList([])
    }else if((!muscleBoolean) && (toolBoolean)){
      setShowList([...arg])
    }
  }
 

  return (
    <div>
       <Grid container spacing={5}>
            {MusclesData.map((element)=>
             <Grid item xs={3}>
              {/* <button onClick={toggleEnabled}>Toggle</button>  */}
              <Chip  
                key= {element.id}
                label= {element.Name} 
                variant="outlined"
                className={element.check ? classes.enableChips : classes.disableChips}
                // clickable={Enable} // Make the chip clickable only if it's enabled
                // disabled={!Enable} // Disable the chip if it's not enabled
                onClick={()=>handleMuscle(element)}
              />
              </Grid>
          )}
          {tooData.map((element)=>
             <Grid item xs={3}>
              {/* <button onClick={toggleEnabled}>Toggle</button>  */}
              <Chip  
                key= {element.id}
                label= {element.Name} 
                variant="outlined"
                className={element.check ? classes.enableChips : classes.disableChips}
                // clickable={Enable} // Make the chip clickable only if it's enabled
                // disabled={!Enable} // Disable the chip if it's not enabled
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
