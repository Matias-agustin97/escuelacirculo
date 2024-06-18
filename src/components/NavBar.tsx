
import { AppBar, Toolbar, useMediaQuery,} from "@mui/material"
import Logo from "../assets/logo_nuevo.png"
import { Outlet } from 'react-router-dom'





function NavBar() {




  const matches = useMediaQuery('(min-width:600px)');





  return (
   <>
   
     <AppBar position="sticky" color="primary" >
     
      <Toolbar sx={{display:"flex", justifyContent:"space-around"}}  >
      <div className="logo-cont" >
      <img src={Logo} alt="Logo de la escuela" className='navbarLogo' />
      </div>
        {matches ? (
          <nav className='navbar'>
          <ul>
            <li><a href="">HOME</a></li>
            <li><a href="">NUESTRA ESCUELA</a></li>
            <li><a href="">RECURSOS PARA ALUMNOS</a></li>
            <li><a href="">NUESTRAS REDES</a></li>
            <li><a href="">NUESTROS PROFESORES</a></li>
            <li><a href="">CONTACTO</a></li>
          </ul>
        </nav>) : null
        }
      </Toolbar>
     </AppBar>
    
    
    <Outlet/>
   </>
  )
}

export default NavBar

