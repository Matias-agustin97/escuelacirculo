import { Container } from '@mui/material'
import React from 'react'

function Autoridades() {
  return (
    <section className='nuestra-historia'>
        <Container sx={{pt:"2rem"}}>
            <p className='home-inscripciones-cont-p1'>Autoridades</p>
            <div className="divider"></div>
            <p className='home-inscripciones-cont-p2'>Rectora: Lic. Gabriela Padín Losada</p>
            <p className="text-white-gen">Directores de estudios: Mag. Ana Perciavalle y Lic. Pablo Saulino</p>
            <p className="text-white-gen">Coordinador de carrera: Alejandro Delgado Morales</p>
            <p className="text-white-gen">Secretario suplente: Silvio Pérez</p>
            <p className='text-white-gen'>Representante Legal: Roberto Gerbasi</p>
        </Container>
    </section>
  )
}

export default Autoridades