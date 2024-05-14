import {BottomNavigation,BottomNavigationAction, Typography } from '@mui/material';
import Feed from '../feed/feed';
import  './dashboard.css';
import Profile from '../profile/profile';
import { useState } from 'react';
import Workout from '../workOut/workout';



const DashBoard = () => {
  const [tab, setTab] = useState(0);
  console.log('DashBoard')
  return (
          <div className='dashboardContainer'>
            <div className='dashboardPage'>
                  {tab === 0 && <Feed />}
                  {tab === 1 && <Workout buttonName = 'Choose'/>}
                  {tab === 2 && <Profile />}
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
                  </BottomNavigation>
              </div>
          </div>
  )
}

export default DashBoard