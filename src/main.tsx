import React from 'react'
import ReactDOM from 'react-dom/client'
import "./assets/css/index.scss"
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage.tsx'
import Errorelement from './pages/Errorelement.tsx'
import NavBar from './components/NavBar.tsx'


const router= createBrowserRouter([
  {
    path:"/",
    element:<NavBar/>,
    errorElement:<Errorelement/>,
    children:[
      {
        path:"/",
        element:<HomePage/>
      }

    ]
  }
  
  
  ,])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}>

    </RouterProvider>
  </React.StrictMode>,
)
