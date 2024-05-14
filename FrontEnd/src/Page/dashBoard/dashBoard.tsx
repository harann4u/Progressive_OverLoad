import {BottomNavigation,BottomNavigationAction, Typography } from '@mui/material';
import Feed from '../feed/feed';
import  './dashboard.css';
import Profile from '../profile/profile';
import ActivityPage from '../activityPage/activityPage';
import { useState } from 'react';
import Workout from '../workOut/workout';
import { useLocalstorage } from '../../localStorage/useLocalStorage';
import { Link } from 'react-router-dom';


const DashBoard = () => {
  const [tab, setTab] = useState(0);
  const {  getItem  } = useLocalstorage('ActivityPageData')
  const resumeExerciseData= getItem() // getting Data from in local storage
  console.log('DashBoard')
  return (
          <div className='dashboardContainer'>
            <div className='dashboardPage'>
                  {tab === 0 && <Feed />}
                  {tab === 1 && <Workout buttonName = 'Choose'/>}
                  {tab === 2 && <Profile />}
                  {/* {tab === 3 && <ActivityPage />} */}
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
                            {resumeExerciseData ?  <BottomNavigationAction label={ <Typography variant='subtitle2' fontWeight="bold"> Resume Button </Typography>} component = {Link}  to="/ActivityPage" /> : null}
                  </BottomNavigation>
              </div>
          </div>
  )
}

export default DashBoard