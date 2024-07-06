import React, { useState } from 'react'
import {Box, Button,Dialog,Slide,DialogContent} from '@mui/material'
import { TransitionProps } from '@mui/material/transitions';
import ListWorkout from '../../figma/listWorkout/listWorkout';
import './workout.css'



interface buttonNameProps {
  buttonName:string
}

const Workout = () => {
 
  return (
  <div className='Workout_MainBar' >
        <ListWorkout/>    
  </div>
 
  )
}

export default Workout

