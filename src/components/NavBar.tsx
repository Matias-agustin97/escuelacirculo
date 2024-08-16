
import { AppBar, Box, Button, Container, Divider, Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Menu, MenuItem, MenuProps, Popover, Toolbar, useMediaQuery,} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import Logo from "../assets/logo_nuevo.png"
import { Link, Outlet } from 'react-router-dom'
import React from "react"
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import SchoolIcon from '@mui/icons-material/School';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import { KeyboardArrowDownTwoTone } from "@mui/icons-material";
import Footer from "./Footer";

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
            <ListItemText primary="Recursos para alumnnos"/>
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
    
    const [anchorElLaCarrera, setAnchorElLaCarrera] = React.useState<null | HTMLElement>(null);
    const openLaCarrera = Boolean(anchorElLaCarrera);
    const handleClickLaCarrera = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorElLaCarrera(event.currentTarget);
    };
    const handleCloseLaCarrera = () => {
      setAnchorElLaCarrera(null);
    };



    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const [anchorElLaescuela, setAnchorElLaescuela] = React.useState<null | HTMLElement>(null);
    const openLaEscuela = Boolean(anchorElLaescuela);
    const handleClickLaEscuela = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorElLaescuela(event.currentTarget);
    };
    const handleCloseLaEscuela = () => {
      setAnchorElLaescuela(null);
    };
  return (
   <>
   
     <AppBar position="sticky" color="primary" elevation={0}  >
     
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
            <li><Button><Link to="/">HOME</Link></Button></li>
            <li><Button endIcon={<KeyboardArrowDownTwoTone color="info"/>} onClick={handleClickLaEscuela} ><a>NUESTRA ESCUELA</a></Button>
            <Menu
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
        id="basic-menu-laescuela"
        anchorEl={anchorElLaescuela}
        open={openLaEscuela}
        onClose={handleCloseLaEscuela}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleCloseLaEscuela}><Link to=""   className="navbar-menuitem">Propuesta Integral</Link></MenuItem>
       
        <MenuItem onClick={handleCloseLaEscuela}><Link to=""   className="navbar-menuitem">Cursada presencial</Link></MenuItem>
        <MenuItem onClick={handleCloseLaEscuela}><Link to=""   className="navbar-menuitem">Cursada hibrida</Link></MenuItem>
        <MenuItem onClick={handleCloseLaEscuela}><Link to=""   className="navbar-menuitem">Nuestros Medios</Link></MenuItem>
        <MenuItem onClick={handleCloseLaEscuela}><Link to=""   className="navbar-menuitem">Convenios con Universidades</Link></MenuItem>
        <MenuItem onClick={handleCloseLaEscuela}><Link to=""   className="navbar-menuitem">Autoridades</Link></MenuItem>
        <MenuItem onClick={handleCloseLaEscuela}><Link to=""   className="navbar-menuitem">Profesores</Link></MenuItem>
      </Menu>
            
            </li>
            <li>
            <Button color="info" onClick={handleClick} endIcon={<KeyboardArrowDownTwoTone color="info"  className="navbar-menuitem" />}><p>RECURSOS PARA ALUMNOS</p>
           
            
           </Button>
           <Menu
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}><Link to=""   className="navbar-menuitem">Trabajos de campo</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to=""  className="navbar-menuitem">Voluntariados y tarea de prensa</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to=""   className="navbar-menuitem">Pasantias</Link></MenuItem>
      </Menu>
              </li>
            <li><Button><Link to="/los-3-ejes">LOS 3 EJES</Link></Button></li>
            <li>
              <Button onClick={handleClickLaCarrera} endIcon={<KeyboardArrowDownTwoTone color="info"/>}  className="navbar-menuitem"><a>LA CARRERA</a></Button>
              <Menu
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
        id="basic-menu-laCarrera"
        anchorEl={anchorElLaCarrera}
        open={openLaCarrera}
        onClose={handleCloseLaCarrera}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleCloseLaCarrera}><Link to="/aranceles" className="navbar-menuitem">Aranceles</Link></MenuItem>
        <MenuItem onClick={handleCloseLaCarrera}><Link to="/plan-de-estudios" className="navbar-menuitem">Plan de Estudios</Link></MenuItem>
        <MenuItem onClick={handleCloseLaCarrera}><Link to="/" className="navbar-menuitem">Cursada presencial</Link></MenuItem>
        
      </Menu>
            </li>
            <li><Button><Link to="/contacto">CONTACTO</Link></Button></li>
          </ul>
        </nav>) : null
        }
      </Toolbar>
     </AppBar>
    <Drawer open={drawerStatus} onClose={()=>setdrawerStatus(false)} anchor="right">
      {mobileDrawer}
    </Drawer>
    <Outlet/>
    <Footer/>
   </>
  )
}

export default NavBar

