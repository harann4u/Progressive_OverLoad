import './App.css'
import {Box , BottomNavigation,BottomNavigationAction,Paper } from '@mui/material';
import {Link} from "react-router-dom"

function App() {

  
  return (
    <Box>
      <Box>
        
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
  )
}

export default App
