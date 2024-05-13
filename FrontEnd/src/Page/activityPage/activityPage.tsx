import React from 'react'
import { useLocation } from 'react-router-dom'
import {List,ListItem,ListItemText} from '@mui/material';

type jsonType = {
  "Id": number,
  "Name": string,
  "Muscle":string,
  "tool": string,
  "check":boolean
}

const ActivityPage = () => {
    const location = useLocation()
    
    const listData:jsonType[] = location.state
    console.log('listData',listData)
  return (
    <div>
       {listData.map((item)=>(
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
