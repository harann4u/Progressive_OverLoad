import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Demo from './Demo.tsx'
import NotFoundPage from './NotFoundPage.tsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    errorElement: <NotFoundPage/>
  },
  {
    path:'/demo1',
    element: <Demo/>
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
        <RouterProvider router = {router} />
  </React.StrictMode>,
)
