import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Feed from './Feed.tsx'
import Progressive from './Progressive.tsx'
import Workout from './Workout.tsx'
import './index.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom"


const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/Feed',
    element:<Feed/>
  },
  {
    path:'/Progressive',
    element:<Progressive/>
  },
  {
    path:'/Workout',
    element:<Workout/>
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
        <RouterProvider router = {router} />
  </React.StrictMode>,
)
