import { Box, Container } from '@mui/material'
import React from 'react'
import CursadaPresencialImg from "../assets/fotos/cursada_presencial.jpg"


function CursadaPresencial() {
  return (
    <section className='nuestra-historia'>
       <Container sx={{pt:"2rem"}}>
       <p className='home-inscripciones-cont-p1'>CURSADA PRESENCIAL</p>
        <div className="divider"></div>
        <p className='home-inscripciones-cont-p2'>Turnos Mañana y Tarde (100% Presencial):</p>
        <Box sx={{display:"flex",justifyContent:"space-evenly",alignContent:"center"}}>
            <ul className='text-white-gen' style={{padding:"1rem"}}>
                <li> Turno Mañana: Dos días de 8:30 a 12:35 h y un día de 8:00 a 13:25 h</li>
                <li>Turno Tarde: Dos días de 14:15 a 18:20 h y un día de 14:15 a 19:40 h</li>
            </ul>
            <img src={CursadaPresencialImg} alt="Cursada Presencial" style={{padding:"1rem"}}/>
        </Box>
       </Container>
    </section>
  )
}

export default CursadaPresencial