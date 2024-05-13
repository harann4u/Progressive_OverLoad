import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import {List,ListItem,ListItemText} from '@mui/material';
import { GlobalContent } from '../../data/context/globalcontext';


type jsonType = {
  "Id": number,
  "Name": string,
  "Muscle":string,
  "tool": string,
  "check":boolean
}

const ActivityPage = () => {
  const {finalList,setFinalList} = useContext(GlobalContent)

    const location = useLocation()
    const listData:jsonType[] = location.state
    console.log('listData',listData)
  return (
    <div>
      <p>Router Data</p>
       {listData.map((item)=>(
                  <ListItem >
                      <ListItemText primary={item.Name}/>
                      <ListItemText primary={item.Muscle}/>
                      <ListItemText primary={item.tool}/>
                     
                </ListItem>
                ))
             }
              <p>Context Data</p>
              {finalList.map((item)=>(
                  <ListItem >
                      <ListItemText primary={item.Name}/>
                      <ListItemText primary={item.Muscle}/>
                      <ListItemText primary={item.tool}/>
                     
                </ListItem>
                ))
             }
    </div>
    
  )
}

export default ActivityPage
