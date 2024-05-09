import { Box, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { DashBoardContext, useDashboardContext } from '../GlobalContext/context'

const ProgressiVe = () => {
  const sampleData = useDashboardContext()
  return (
    <div style ={{display:'flex',alignItems:'center',justifyContent:'center',marginTop:'100px'}}>
      <Typography variant='h6' fontWeight="bold"> Progressive tab</Typography>
      <Typography variant='h6' fontWeight="bold"> Name : {sampleData.Name}</Typography>
      <Typography variant='h6' fontWeight="bold"> Status :{sampleData.isBoolean}</Typography>
    </div>
  )
}

export default ProgressiVe
