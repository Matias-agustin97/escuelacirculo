
import { AppBar, Box, Button, Container, Divider, Drawer, IconButton, List, Menu, MenuItem, Toolbar,  useMediaQuery,} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import Logo from "../assets/logo_nuevo.png"
import { Link, Outlet } from 'react-router-dom'
import React from "react"
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';

import { KeyboardArrowDownTwoTone } from "@mui/icons-material";
import Footer from "./Footer";

function NavBar() {

 




 

  const matches = useMediaQuery('(min-width:600px)');



  const [drawerStatus, setdrawerStatus] = useState(false)


  ////////////////////////////////////////
  const espacioAlumnos=[
    {path:"https://escuelacpd.quinttos.com/",text:"Acceso a Quinttos"},
    {path:"mail-insti",text:"Acceso a Email Institucional"}
  ]

  const [espacioAlumnosActive, setespacioAlumnosActive] = useState(false)
  ///////////////////////////////////////////////
  const cursos =[
    {path:"propuestas-de-actualizacion",text:"Propuestas de Actualizacion"}
  ]
  const [cursosActive, setcursosActive] = useState(false)
  //////////////////////////////////
  const laEscuela =[
    {path:"/propuesta-integral",text:"Propuesta Integral"},
    {path:"/plan-de-estudios",text:"Plan de Estudios"},
    {path:"/cursada-presencial",text:"Cursada Presencial"},
    {path:"/cursada-hibrida",text:"Cursada Hibrida"},
    {path:"/nuestros-medios",text:"Nuestros Medios"},
    {path:"/convenios",text:"Convenios con Universidades"},
    {path:"/autoridades",text:"Autoridades"},
    {path:"/trabajo-de-campo",text:"Trabajo de campo"},
    {path:"/voluntariado",text:"Voluntariado y tarea de prensa"},
    

  ]
  
  
  const [laEscuelaActive, setlaEscuelaActive] = useState(false)
  //////////////////////////////////
 const nuestraHistoria =[{path:"/nuestra-historia",text:"Circulo de periodistas deportivos"},
  {path:"/olimpia",text:"Premios Olimpia"}
 ];
 const [nuestraHistoriaActive, setnuestraHistoriaActive] = useState(false)
  const mobileDrawer=(
  
      <Box  sx={{width:"60vw",backgroundColor:"#233872",minHeight:"150vh"}} >
        <img src={Logo} style={{maxWidth:"50vw"}}/>
      <Divider/>
      <Container>
        <List sx={{color:"#fff",textAlign:"left"}}>
        <Box><Button><Link to={""}>INICIO</Link></Button></Box>
        <Box><Button sx={{textAlign:"left"}}><Link to={""}>PATRIMONIO DE LA CIUDAD</Link></Button></Box>
        <Box><Button  endIcon={<KeyboardArrowDownTwoTone color="info"/>} onClick={()=>setnuestraHistoriaActive(!nuestraHistoriaActive)}><Link to={""}>NUESTRA HISTORIA</Link></Button>
        <Box sx={{display:"flex",flexDirection:"column"}}>
          {
           nuestraHistoriaActive ? nuestraHistoria.map((el)=>{
            return <Button key={el.text}><Link to={el.path}>{el.text}</Link></Button>
          }):null 
          
          
          }
        </Box>
        </Box>
        <Box><Button endIcon={<KeyboardArrowDownTwoTone color="info"/>} onClick={()=>setlaEscuelaActive(!laEscuelaActive)}><Link to={""}>La Escuela</Link></Button>
        <Box sx={{display:"flex",flexDirection:"column"}}>
          {
           laEscuelaActive ? laEscuela.map((ele)=>{
          
            
            return <Button key={ele.text}><Link to={ele.path}>{ele.text}</Link></Button>
          }):null 
          
          
          }
        </Box>
        </Box>
        <Box><Button><Link to={"/pasantias"}>Pasantias</Link></Button></Box>

        <Box><Button endIcon={<KeyboardArrowDownTwoTone color="info"/>} onClick={()=>setcursosActive((e)=>!e)}><Link to={""}>CURSOS</Link></Button>    
        <Box sx={{display:"flex",flexDirection:"column"}}>
          {
           cursosActive ? cursos.map((ele)=>{
          
            
            return <Button key={ele.text}><Link to={ele.path}>{ele.text}</Link></Button>
          }):null 
          
          
          }
        </Box>
        </Box>
      
        <Box><Button endIcon={<KeyboardArrowDownTwoTone color="info"/>} onClick={()=>setespacioAlumnosActive(!espacioAlumnosActive)} ><Link to={""}>Espacio Alumnos</Link></Button></Box>
        <Box sx={{display:"flex",flexDirection:"column"}}>
          {
           espacioAlumnosActive ? espacioAlumnos.map((ele)=>{
            if(ele.path=="https://escuelacpd.quinttos.com/"){
              return <Button key={ele.text}><a href={ele.path}>{ele.text}</a></Button>
            }
            
            return <Button key={ele.text}><Link to={ele.path}>{ele.text}</Link></Button>
          }):null 
          
          
          }
        </Box>
        <Box><Button><Link to={""}>Aranceles</Link></Button></Box>
        <Box><Button><Link to={""}>INSCRIBITE</Link></Button></Box>
        <Box><Button><Link to={""}>Contacto</Link></Button></Box>
        </List>
      </Container>
      </Box>
    )
    

    const [anchorCursos, setAnchorCursos ]= React.useState<null | HTMLElement>(null)
      
      const openCursos = Boolean(anchorCursos); 
      
    const handleClickCursos = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorCursos(event.currentTarget);
    };
    const handleCloseCursos = () => {
      setAnchorCursos(null);
    };



   // const [anchorElLaCarrera, setAnchorElLaCarrera] = React.useState<null | HTMLElement>(null);
    /// openLaCarrera = Boolean(anchorElLaCarrera);
    //const handleClickLaCarrera = (event: React.MouseEvent<HTMLButtonElement>) => {
   //   setAnchorElLaCarrera(event.currentTarget);
   // };
   // const handleCloseLaCarrera = () => {
   //   setAnchorElLaCarrera(null);
   // };

    const [anchorEspacioAlumnos, setAnchorEspacioAlumnos] = React.useState<null | HTMLElement>(null);
    const openEspacioAlumnos = Boolean(anchorEspacioAlumnos);
    const handleClickEspacioAlumnos = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEspacioAlumnos(event.currentTarget);
    };
    const handleCloseEspacioAlumnos = () => {
      setAnchorEspacioAlumnos(null);
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
     
      <Toolbar sx={{display:matches?"flex":"block", justifyContent:"start",flexDirection:matches ? "row": "left"}}  >
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
            <li><Button><Link to="/">INICIO</Link></Button></li>
            <li><Button><Link to="/patrimonio">PATRIMONIO DE LA CIUDAD</Link></Button></li>
            <li><Button endIcon={<KeyboardArrowDownTwoTone color="info"/>} onClick={handleClickLaEscuela} ><a>NUESTRA HISTORIA</a></Button>
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
        <MenuItem onClick={handleCloseLaEscuela}><Link to="/nuestra-historia"   className="navbar-menuitem">CIRCULO DE PERIODISTAS DEPORTIVOS</Link></MenuItem>
       
        <MenuItem onClick={handleCloseLaEscuela}><Link to="/premios-olimpia"   className="navbar-menuitem">PREMIOS OLIMPIA</Link></MenuItem>
       
      </Menu>
            
            </li>
            <li>
            <Button color="info" onClick={handleClick} endIcon={<KeyboardArrowDownTwoTone color="info"  className="navbar-menuitem" />}><Link to={""}>LA ESCUELA</Link>
           
            
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
        <MenuItem onClick={handleClose}><Link to="/propuesta-integral"   className="navbar-menuitem">PROPUESTA INTEGRAL</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/plan-de-estudios"  className="navbar-menuitem">PLAN DE ESTUDIOS</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/cursada-presencial"   className="navbar-menuitem">CURSADA PRESENCIAL</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/cursada-hibrida"   className="navbar-menuitem">CURSADA HIBRIDA</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/nuestros-medios"   className="navbar-menuitem">NUESTROS MEDIOS</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/convenios-con-universidades"   className="navbar-menuitem">CONVENIOS CON UNIVERSIDADES</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/autoridades"   className="navbar-menuitem">AUTORIDADES</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/profesores"   className="navbar-menuitem">PROFESORES</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="trabajo-de-campo"   className="navbar-menuitem">TRABAJO DE CAMPO</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/voluntariado"   className="navbar-menuitem">VOLUNTARIADOS Y TAREA DE PRENSA</Link></MenuItem>
      </Menu>
              </li>
            <li><Button><Link to="/pasantias">PASANTIAS</Link></Button></li>
            
        
            <li><Button  endIcon={<KeyboardArrowDownTwoTone color="info"/>} onClick={handleClickCursos}><Link to="">CURSOS</Link></Button>
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
        anchorEl={anchorCursos}
        open={openCursos}
        onClose={handleCloseCursos}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleCloseCursos}><Link to="/propuestas-actualizacion" className="navbar-menuitem">PROPUESTAS DE ACTUALIZACIÓN</Link></MenuItem> 
      </Menu>            
            </li>
            <li>
              <Button endIcon={<KeyboardArrowDownTwoTone color="info"/>}  onClick={handleClickEspacioAlumnos}><Link to={""}>ESPACIO ALUMNOS</Link></Button>
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
        anchorEl={anchorEspacioAlumnos}
        open={openEspacioAlumnos}
        onClose={handleCloseEspacioAlumnos}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleCloseEspacioAlumnos}><a href="" className="navbar-menuitem">ACCESO A QUINTTOS</a></MenuItem> 
        <MenuItem onClick={handleCloseEspacioAlumnos}><Link to="" className="navbar-menuitem">ACCESO A EMAIL INSTITUCIONAL</Link></MenuItem> 
      </Menu>            
            </li>
            <li><Button><Link to={"/aranceles"}>ARANCELES</Link></Button></li>
            <li><Button><Link to={"/contacto"}>INSCRIBITE</Link></Button></li>
            <li><Button><Link to={"/contacto"}>CONTACTO</Link></Button></li>
          </ul>
        </nav>) : null
        }
      </Toolbar>
     </AppBar>
    <Drawer open={drawerStatus} onClose={()=>setdrawerStatus(false)} anchor="left">
      {mobileDrawer}
    </Drawer>
    <Outlet/>
    <Footer/>
   </>
  )
}

export default NavBar

