import {BottomNavigation,BottomNavigationAction, Typography,Chip } from '@mui/material';
import Feed from '../feed/feed';
import  { useContext} from 'react'
import  './dashboard.css';
import Profile from '../profile/profile';
import { GlobalContent } from '../../data/context/globalcontext'
import { useState } from 'react';
import Workout from '../workout/workout';
import ListWorkout from '../../figma/listWorkout/listWorkout';
import { useLocalstorage } from '../../helper/localStorage/useLocalstorage';
import { Link } from 'react-router-dom';
import Examplestoreimpl from '../Concept_implementations/examplestoreimpl';
import { UseSelector, useSelector } from 'react-redux';
import { RootState } from '../../data/redux/store';

type clikcedChips = {
  [key:number]:boolean
}

const DashBoard = () => {
  const [tab, setTab] = useState(0);
  const localStoragefinalListData = useSelector((state:RootState)=> state.selectedList.localStorage)
  console.log('DashBoard')
  const [clickedChips,setClickedChips] = useState<clikcedChips>({})
  const chipsData = [
    {id:1,label:'Feed'},
    {id:2,label:'Workout'},
    {id:3,label:'Profile'},
    // {id:4,label:'Resume Workout'},
  ]
  const handleChipsClick = (chipID:number)=>{
    console.log('funciton')
    const newClickedChip :clikcedChips = {}
    newClickedChip[chipID] = true
    setClickedChips(newClickedChip)
  }
  return (
          <div className='dashboardContainer'>
            <div className='dashboardPage'>
                  {tab === 0 && <Feed />}
                  {tab === 1 &&   <ListWorkout/>  }
                  {tab === 2 && <Profile />}
                  {tab === 3 && <Examplestoreimpl/>}
            </div>
            <div className='tab'>
                  <BottomNavigation
                            showLabels
                            value={tab}
                            onChange={(event, newValue) => {
                              setTab(newValue)
                            }}
                          >
                             {chipsData.map((chip)=>(
                                <BottomNavigationAction 
                                label={
                                    <Chip 
                                          key = {chip.id} 
                                          label= {chip.label} 
                                          onClick = {()=>handleChipsClick(chip.id)}
                                          style = {{
                                             backgroundColor: clickedChips[chip.id] ? '#FFC700': '#FFF3CC',
                                             color:'black'
                                          }}
                                    />} 
                                />
                             ))} 
                             
                              
                            { localStoragefinalListData?.length ? <BottomNavigationAction 
                                      label = {
                                          <Chip key = {4}  
                                            label= "Resume Button" 
                                            onClick = {()=>handleChipsClick(4)} 
                                            style = {{
                                              backgroundColor: clickedChips[4] ? '#FFC700': '#FFF3CC',
                                              color:'black'
                                           }}
                                            />
                                            }
                                      component = {Link}  to="/ActivityPage" /> : null
                            }
                  </BottomNavigation>
                                
              </div>
          </div>
  )
}

export default DashBoard