import React, { useState } from 'react'
import {Box, Button,Dialog,Slide,DialogContent} from '@mui/material'
import { TransitionProps } from '@mui/material/transitions';
import ListWorkout from '../../figma/listWorkout/listWorkout';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="left" ref={ref} {...props} />;
});

interface buttonNameProps {
  buttonName:string
}

const Workout = ({buttonName}:buttonNameProps) => {
  const [open,setOpen] = useState(false)
  const handleclickOpen = ()=>{
     setOpen(true)
  }
  const handleClose = ()=>{
    setOpen(false)
 }
  return (
  <div style ={{display:'flex',alignItems:'center',justifyContent:'center',marginTop:'100px'}}>
      <Button variant="contained" onClick={handleclickOpen} >{buttonName} WorkOut</Button>
       <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        fullWidth
        maxWidth = "lg"
        sx = {{width:"200px",height:"200px",margin:"auto",minHeight:"100vh",minWidth :"500px"}}
        PaperProps={{style:{margin:0}}}
      >
         <DialogContent style={{  position: 'absolute', top: 0, left: 0, }}>
           <ListWorkout/>
        </DialogContent>
        
        </Dialog>
    </div>
  )
}

export default Workout

