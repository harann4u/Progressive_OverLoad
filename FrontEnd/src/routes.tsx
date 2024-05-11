import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import DashBoard from "./Page/dashBoard/dashBoard"
import Feed from "./Page/feed/feed"
import Workout from "./Page/workOut/workout"
import Profile from "./Page/profile/profile"
import ActivityPage from "./Page/activityPage/activityPage"

const AppRoutes = () => {
  return (
    <div>
       <Router>
        <Routes>
            <Route path = '/' element = {<DashBoard/>}/>
            <Route path= "/Feed" element = {<Feed/>}/>  
             <Route path= "/Workout" element = {<Workout/>}/> 
             <Route path="/Profile" element = {<Profile/>}/>
             <Route path="/ActivityPage" element = {<ActivityPage/>}/>
        </Routes>
       </Router>
    </div>
  )
}

export default AppRoutes
