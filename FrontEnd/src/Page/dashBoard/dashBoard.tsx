import {BottomNavigation,BottomNavigationAction, Typography } from '@mui/material';
import Feed from '../feed/feed';
import  { useContext} from 'react'
import  './dashboard.css';
import Profile from '../profile/profile';
import { GlobalContent } from '../../data/context/globalcontext'
import { useState } from 'react';
import Workout from '../workout/workout';
import { useLocalstorage } from '../../helper/localStorage/useLocalstorage';
import { Link } from 'react-router-dom';
import Examplestoreimpl from '../Concept_implementations/examplestoreimpl';

const DashBoard = () => {
  const [tab, setTab] = useState(0);
  const {locatStoageState} = useContext(GlobalContent)
  const {  getLocalStorageItem  } = useLocalstorage('ActivityPageData')
  const resumeExerciseData= getLocalStorageItem() // getting Data from in local storage
  console.log('DashBoard')
  return (
          <div className='dashboardContainer'>
            <div className='dashboardPage'>
                  {tab === 0 && <Feed />}
                  {tab === 1 && <Workout buttonName = 'Choose'/>}
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
                              <BottomNavigationAction label={ <Typography variant='subtitle2' fontWeight="bold"> Feed </Typography>}  />
                              <BottomNavigationAction label={ <Typography variant='subtitle2' fontWeight="bold"> Workout </Typography>} />
                              <BottomNavigationAction label={ <Typography variant='subtitle2' fontWeight="bold"> Profile </Typography>}  />
                              {/* <BottomNavigationAction label={ <Typography variant='subtitle2' fontWeight="bold"> concept Impelementation </Typography>}  /> */}
                            { locatStoageState ?  <BottomNavigationAction label={ <Typography variant='subtitle2' fontWeight="bold"> Resume Button </Typography>} component = {Link}  to="/ActivityPage" /> : null}
                  </BottomNavigation>
              </div>
          </div>
  )
}

export default DashBoard