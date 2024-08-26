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
      },{
        path:"nuestra-historia",
        element:<NuestraHistoria/>
      },
      {
        path:"premios-olimpia",
        element:<PremiosOlimpia/>
      },
      {
        path:"propuesta-integral",
        element:<PropuestaIntegral/>
      },
      {
        path:"cursada-presencial",
        element:<CursadaPresencial/>
      },{
        path:"cursada-hibrida",
        element:<CursadaHibrida/>
      },{
        path:"nuestros-medios",
        element:<NuestrosMedios/>
      },{
        path:"convenio-con-universidades",
        element:<ConveniosUniversidades/>
      },{
        path:"autoridades",
        element:<Autoridades/>
      },{
        path:"trabajo-de-campo",
        element:<TrabajoCampo/>
      },{
        path:"propuestas-actualizacion",
        element:<PropuestasActualizacion/>
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
