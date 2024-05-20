import {  Typography } from '@mui/material'
import { useContext } from 'react'
import { GlobalContent } from '../../data/context/globalcontext'


const Profile = () => {

  // const {userInfo,setUserInfo} = useContext(GlobalContent)
  // const changeName = ()=> {
  //   setUserInfo({...userInfo, name:'monika'})
  // }

  return (
    <div style ={{display:'flex',alignItems:'center',justifyContent:'center',marginTop:'100px'}}>
      {/* <button onClick={changeName}> Change name</button> */}
      <Typography variant='h6' fontWeight="bold"> Profile tab </Typography>
      {/* <Typography variant='h6' fontWeight="bold">  status : {userInfo.name} </Typography> */}
    </div>
  )
}

export default Profile
