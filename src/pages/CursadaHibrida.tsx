import { Container } from '@mui/material'
import React from 'react'



function CursadaHibrida() {
  return (
    <section className='nuestra-historia'>
        <Container sx={{pt:"2rem"}}>
        <p className='home-inscripciones-cont-p1'>CURSADA HIBRIDA</p>
       
        <div className="divider"></div>
        <p className='home-inscripciones-cont-p2'>TURNO NOCHE</p>
        <p className="text-white-gen">
        La cursada es 50% presencial (materias prácticas) y 50% virtual, tanto sincrónica como asincrónica (materias teóricas). Esta modalidad reduce el tiempo de viaje y permite cursar parte de la carrera desde casa. Es ideal si trabajás o vivís lejos.
Las clases se dictan dos días de 18:30 a 21:15 h y dos días de 18:30 a 22:35 h. Los días y horarios de cursada se fijarán antes del comienzo de cada cuatrimestre.

        </p>
        </Container>
    </section>
  )
}

export default CursadaHibrida