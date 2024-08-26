import { Box, Container } from '@mui/material'

import Olimpia from "../assets/fotos/premios_olimpia.jpg"
import Tapia from "../assets/fotos/tapia.jpg"

function PremiosOlimpia() {
  return (
    <section className='nuestra-historia'>
      <Container>
      <p className='home-inscripciones-cont-p1' style={{paddingTop:"4rem"}}>  PREMIOS OLIMPIA</p>
      <div className="divider"></div>
      <Box sx={{display:"flex",justifyContent:"space-between"}}>
        <Box>
        <p className='text-white-gen'>Los premios Olimpia son la máxima distinción del deporte argentino desde 1954. El quíntuple campeón del mundo Juan Manuel Fangio fue el primer premiado por haber logrado, en ese momento, su segundo campeonato en la Fórmula 1. 
En 1970, se incorporaron los premios Olimpia de Plata a los deportistas más destacados de cada actividad. Pascual Pérez, Nicolino Locche, Roberto de Vicenzo, Horacio Accavallo, Carlos Monzón, Guillermo Vilas, Diego Maradona, Santos Laciar, Gabriela Sabatini, Emanuel Ginóbili, David Nalbandián, Juan Martín Del Potro y Lionel Messi son algunos de los que recibieron la estatuilla, elegidos por los socios e integrantes de la institución.
</p>
<img src={Tapia} alt="" style={{maxWidth:"25vw"}} />
        </Box>
    <img src={Olimpia} alt="premios Olimpia"style={{maxWidth:"25vw"}} />
      </Box>
      </Container>
    </section>
  )
}

export default PremiosOlimpia