
import { AppBar, Box, Container, Divider, Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Toolbar, useMediaQuery,} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import Logo from "../assets/logo_nuevo.png"
import { Outlet } from 'react-router-dom'
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import SchoolIcon from '@mui/icons-material/School';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';

function NavBar() {




  const matches = useMediaQuery('(min-width:600px)');



  const [drawerStatus, setdrawerStatus] = useState(false)


  const mobileDrawer=(
  
      <Box  sx={{width:"50vw",backgroundColor:"#233872",minHeight:"100vh"}} >
        <img src={Logo} style={{maxWidth:"50vw"}}/>
      <Divider/>
      <Container>
        <List sx={{color:"#fff"}}>
          <ListItemButton>
            <ListItemIcon>
              
              <AccountBalanceIcon color="info"/>
            </ListItemIcon>
            
            <ListItemText primary="Sobre la Facultad" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
            <SchoolIcon color="info"/>
            </ListItemIcon>
            <ListItemText primary="recursos para alumnnos"/>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <FactCheckIcon color="info"/>
            </ListItemIcon>
            <ListItemText primary="Nuestro plan de estudios"/>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <FeaturedPlayListIcon color="info"/>
            </ListItemIcon>
            <ListItemText primary="Lorem"/>
          </ListItemButton>
        </List>
      </Container>
      </Box>
    )
  



  return (
   <>
   
     <AppBar position="sticky" color="primary" >
     
      <Toolbar sx={{display:matches?"flex":"block", justifyContent:"space-around",flexDirection:matches ? "row": "left"}}  >
      {matches ? null :(
          <IconButton color="info" size="large" onClick={()=>setdrawerStatus(!drawerStatus)} sx={{zIndex:"99"}}>
            {drawerStatus ? <CloseIcon sx={{fontSize:"2.8rem"}}/> : <MenuIcon sx={{fontSize:"2.8rem"}}/>}
          </IconButton>
        )}
        {matches ?  (<div className="logo-cont" >
       
       <img src={Logo} alt="Logo de la escuela" className='navbarLogo' />
       </div>): null}
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
    <Drawer open={drawerStatus} onClose={()=>setdrawerStatus(false)} anchor="right">
      {mobileDrawer}
    </Drawer>
    <Outlet/>
   </>
  )
}

export default NavBar

