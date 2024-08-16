import { Button, Container, FormControl, InputLabel, Select, TextField, Typography, useTheme } from '@mui/material'
import React from 'react'

function Contacto() {

    
    const mobileSettingsContacto={
        display:"flex",
        justifyContent:"space-between"
    }

  return (
    <section className='contacto-cont'>
        <p className='contacto-title'>Contacto</p>
        <Container sx={mobileSettingsContacto}>
            <form className='formulario-de-contacto'>
                <Typography component="p" variant="h5" px="5rem" color="primary" fontWeight="bold" >Contactate con nosotros</Typography>

                <TextField label="Nombre" helperText="Ingrese su nombre"fullWidth={true}  color='primary' sx={{mt:"2rem"}} />
                <TextField label="Telefono" helperText="Ingrese su telefono" color='primary' fullWidth={true}/>
           
                <TextField label="Email" helperText="Ingrese su email" fullWidth={true} type='email'/>
            
        <TextField label="mensaje" helperText="Ingrese su mensaje" fullWidth={true} multiline={true}/>
            
           <div style={{width:"100%",display:"flex",justifyContent:"center",alignContent:"center"}}>
           <Button variant='contained' color='primary' sx={{px:"2rem"}} >ENVIAR</Button>
           </div>
           <Container>
          <p style={{fontFamily:"Rubik",paddingTop:"1.4rem",color:"primary"}}> Si querés acercarte personalmente o comunicarte por teléfono, acá te dejamos la información. </p>
           </Container>
            </form>
            <div className='contacto-iframe-cont'>
            <iframe className="mapa-contacto" frameBorder="0" allowFullScreen={true}  data-src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBs_lAfpuIjfx7DGisR7oUh1ZZ_C5qtGKc&amp;q=Rodriguez+Pe%C3%B1a+628+caba&amp;maptype=roadmap" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBs_lAfpuIjfx7DGisR7oUh1ZZ_C5qtGKc&amp;q=Rodriguez+Pe%C3%B1a+628+caba&amp;maptype=roadmap">
            </iframe>
            <div className="contacto-text-cont">
            <p style={{fontStyle:"italic",color:"#fff",lineHeight:"1.8rem"}}> Escuela Superior de Periodismo Deportivo "José R. López Pájaro"

(A-777) del Círculo de Periodistas Deportivos de Buenos Aires. </p>
<p  style={{color:"#fff",fontWeight:"bold"}}>Rodríguez Peña 628, CP1020, Ciudad Autónoma de Buenos Aires</p>
<p style={{color:"#fff",fontWeight:"bold"}}> Tel: (011) 4485-5213

Whatsapp +5491151337164

informes@escuelacirculo.edu.ar </p>
            </div>
            </div>
         
        </Container>
       
    </section>
  )
}

export default Contacto