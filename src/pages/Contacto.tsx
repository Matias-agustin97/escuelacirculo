import { Button, Container, TextField, } from '@mui/material'


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
           
                <TextField label="Nombre" helperText="Ingrese su nombre"fullWidth={true}  color='primary' />
           
                <TextField label="Email" helperText="Ingrese su email"fullWidth={true} />
            
        <TextField label="mensaje" helperText="Ingrese su mensaje" fullWidth={true}/>
            
            <Button variant='contained' color='primary' sx={{ margin:"0 auto"}} >ENVIAR</Button>
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