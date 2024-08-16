import React from 'react'
import ReactDOM from 'react-dom/client'
import "./assets/css/index.scss"
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage.tsx'
import Errorelement from './pages/Errorelement.tsx'
import NavBar from './components/NavBar.tsx'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Contacto from './pages/Contacto.tsx'
import Los3Ejes from './pages/Los3Ejes.tsx'
import Aranceles from './pages/Aranceles.tsx'
import PlanDeEstudios from './pages/PlanDeEstudios.tsx'





const theme = createTheme({
  palette: {
    primary: {
      light: '#ffffff',
      main: '#233872',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#ed6b4b',
      dark: '#ba000d',
      contrastText: '#000',
    },
    info:{
      main:"#fff"
    }
  },
});




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
      ,{
        path:"/contacto",
        element:<Contacto/>
      },
      {
        path:"/los-3-ejes",
        element:<Los3Ejes/>
      },
      {
        path:"/aranceles",
        element:<Aranceles/>
      },
      {
        path:"/plan-de-estudios",
        element:<PlanDeEstudios/>
      }
    ]
  }
  
  
  ,])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <ThemeProvider theme={theme}>
    <RouterProvider router={router}>
    </RouterProvider>
   </ThemeProvider>
  </React.StrictMode>,
)
