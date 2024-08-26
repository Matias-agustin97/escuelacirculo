import { Box, Container } from '@mui/material'

import NuesotrosMedios1 from "../assets/fotos/nuestros-medios1.jpg"
import NuesotrosMedios2 from "../assets/fotos/nuestros-medios2.jpg"
import NuesotrosMedios3 from "../assets/fotos/nuestros-medios3.jpg"
import NuesotrosMedios4 from "../assets/fotos/nuestros-medios4.jpg"
// @ts-ignore
import {Splide,SplideSlide} from "@splidejs/react-splide" 
function NuestrosMedios() {





    const options={
        type         : 'loop',
    gap          : '1rem',
    autoplay     : true,
    pauseOnHover : false,
    resetProgress: false,
    cover:true,
    height:"70vh"
    }



  return (
    <section className="nuestra-historia">
        <Container sx={{pt:"2rem"}}>
          <Box>
          <p className='home-inscripciones-cont-p1'>NUESTROS MEDIOS</p>
            <div className="divider"></div>
            <p className='text-white-gen'>Tenemos la página  <a href="www.piramideinvertida.com.ar" style={{color:"#ed6b4b"}}>www.piramideinvertida.com.ar</a> en donde publicamos los trabajos que los alumnos de segundo y tercero hacen en las prácticas profesionalizantes. 
Por otro lado, está la Radio La Olímpica con la participación de los alumnos de periodismo radial. 
También compartimos nuestras producciones en el canal de Spotify y la página y redes del Círculo de Periodistas Deportivos
</p>
          </Box>
         <Box sx={{padding:"2rem 1rem"}}>
         <Splide options={options}>
            <SplideSlide>
                <img src={NuesotrosMedios1} alt="" />
            </SplideSlide>
            <SplideSlide>
            <img src={NuesotrosMedios2} alt="" />
            </SplideSlide>
            <SplideSlide>
            <img src={NuesotrosMedios3} alt="" />
            </SplideSlide>
            <SplideSlide>
            <img src={NuesotrosMedios4} alt="" />
            </SplideSlide>
          </Splide>
         </Box>
        </Container>
    </section>
  )
}

export default NuestrosMedios