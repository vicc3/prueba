import React from 'react'
import './App.css'
import Dashboard from './componentes/Dashboard/Dashboard'
import Login from './componentes/Login/Login'
import Register from './componentes/Register/Register'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div><Login/></div>
  },
  {
    path: '/Register',
    element: <div><Register/></div>
  },
  {
    path: '/Dashboard',
    element: <div><Dashboard/></div>
  }
])

function App() {

  return (
    <div>
    <RouterProvider router={router}/>
    </div>
  )

}

export default App;
