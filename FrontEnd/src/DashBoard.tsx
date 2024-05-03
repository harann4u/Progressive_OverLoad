
import {Box , BottomNavigation,BottomNavigationAction,Paper } from '@mui/material';
import {Link} from "react-router-dom"
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Feed from './Feed';
import Progressive from './Progressive';
import Workout from './Workout';



  

const DashBoard = () => {
    
  return (
    <Router>
            <Box   sx={{ backgroundColor:"#06d6a0",width:"200px",height:"200px",margin:"auto",minHeight:"100vh",minWidth :"500px",display:"flex",justifyContent:"center"}}>
                <Box  sx= {{backgroundColor : "rgb(255, 255, 255)", width:"400px",height: '400px', dsiplay : "flex",justifyContent:"center",alignItems:'center',marginTop:'100px'}}>
                        <Routes>
                            <Route path= "/Feed" element = {<Feed/>}/>
                            <Route path= "/Workout" element = {<Workout/>}/>
                            <Route path="/Progressive" element = {<Progressive/>}/>
                        </Routes>   
                    </Box>
                    <Paper sx ={{position:'fixed',bottom:0,left:0,right:0}}>
                        <BottomNavigation
                        showLabels
                        >
                            <BottomNavigationAction label="Feed" component = {Link}  to="/Feed" />
                            <BottomNavigationAction label="Workout" component = {Link}  to="/Workout"/>
                            <BottomNavigationAction label="Progress" component = {Link}  to="/Progressive" />
                        </BottomNavigation>
                    </Paper>
            </Box>
    </Router>
  
  )
}

export default DashBoard
