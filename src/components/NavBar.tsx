
import { AppBar, CssBaseline, Toolbar,} from "@mui/material"
import Logo from "../assets/navLogo.jpg"
import { Outlet } from 'react-router-dom'


//


function NavBar() {
  return (
   <>
    <header style={{position:"sticky"}}>
     <AppBar position="sticky" color="info" >
     
      <Toolbar sx={{display:"flex", justifyContent:"space-around"}}  >
      <div className="logo-cont" >
      <img src={Logo} alt="Logo de la escuela" className='navbarLogo' />
      </div>
        <nav className='navbar'>
          <ul>
            <li><a href="">HOME</a></li>
            <li><a href="">NUESTRA ESCUELA</a></li>
            <li><a href="">RECURSOS PARA ALUMNOS</a></li>
            <li><a href="">NUESTRAS REDES</a></li>
            <li><a href="">NUESTROS PROFESORES</a></li>
            <li><a href="">CONTACTO</a></li>
          </ul>
        </nav>
      </Toolbar>
     </AppBar>
    
    </header>
    <Outlet/>
   </>
  )
}

export default NavBar