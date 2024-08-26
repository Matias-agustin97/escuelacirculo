import { Box, Container } from '@mui/material'

import Picture from "../assets/fotos/carrusel_nuevo5.jpeg"
function TrabajoCampo() {
  return (
    <section className='nuestra-historia'>
        <Container sx={{pt:"2rem"}}>
            <p className='home-inscripciones-cont-p1'>TRABAJO DE CAMPO</p>
            <div className="divider"></div>
            <p className="text-white-gen">
            Los alumnos acceden, con acreditaciones especiales, a la cobertura de partidos o entrenamientos de los deportes que se cursarán. 
Cuentan con invitaciones para la participación en tribuna de programas de entrevistas o debates. 
También se realizan visitas a centros deportivos.

            </p>
            <Box sx={{px:"2rem"}}>
               <Container >
               <img src={Picture} alt="" style={{maxWidth:"100%"}} />
               </Container>
            </Box>
        </Container>
    </section>
  )
}

export default TrabajoCampo