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
import NuestraHistoria from './pages/NuestraHistoria.tsx'
import PremiosOlimpia from './pages/PremiosOlimpia.tsx'
import PropuestaIntegral from './pages/PropuestaIntegral.tsx'
import CursadaPresencial from './pages/CursadaPresencial.tsx'
import CursadaHibrida from './pages/CursadaHibrida.tsx'
import NuestrosMedios from './pages/NuestrosMedios.tsx'
import ConveniosUniversidades from './pages/ConveniosUniversidades.tsx'
import Autoridades from './pages/Autoridades.tsx'
import TrabajoCampo from './pages/TrabajoCampo.tsx'
import PropuestasActualizacion from './pages/PropuestasActualizacion.tsx'
import ErrorPage from './pages/ErrorPage.tsx'





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
    
    children:[
      {
        path:"/",
        element:<HomePage/>,
        errorElement:<ErrorPage/>
      }
      ,{
        path:"/contacto",
        element:<Contacto/>,
        errorElement:<ErrorPage/>
      },
      {
        path:"/los-3-ejes",
        element:<Los3Ejes/>,
        errorElement:<ErrorPage/>
      },
      {
        path:"/aranceles",
        element:<Aranceles/>,
        errorElement:<ErrorPage/>
      },
      {
        path:"/plan-de-estudios",
        element:<PlanDeEstudios/>,
        errorElement:<ErrorPage/>
      },{
        path:"nuestra-historia",
        element:<NuestraHistoria/>,
        errorElement:<ErrorPage/>
      },
      {
        path:"premios-olimpia",
        element:<PremiosOlimpia/>,
        errorElement:<ErrorPage/>
      },
      {
        path:"propuesta-integral",
        element:<PropuestaIntegral/>,
        errorElement:<ErrorPage/>
      },
      {
        path:"cursada-presencial",
        element:<CursadaPresencial/>,
        errorElement:<ErrorPage/>
      },{
        path:"cursada-hibrida",
        element:<CursadaHibrida/>,
        errorElement:<ErrorPage/>
      },{
        path:"nuestros-medios",
        element:<NuestrosMedios/>,
        errorElement:<ErrorPage/>
      },{
        path:"convenio-con-universidades",
        element:<ConveniosUniversidades/>,
        errorElement:<ErrorPage/>
      },{
        path:"autoridades",
        element:<Autoridades/>,
        errorElement:<ErrorPage/>
      },{
        path:"trabajo-de-campo",
        element:<TrabajoCampo/>,
        errorElement:<ErrorPage/>
      },{
        path:"propuestas-de-actualizacion",
        element:<PropuestasActualizacion/>,
        errorElement:<ErrorPage/>
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
