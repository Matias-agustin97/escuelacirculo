import { Container } from '@mui/material'
import React from 'react'
import footerLogo from "../assets/pwa-192x192.png"
import EmailSharpIcon from '@mui/icons-material/EmailSharp';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';



function Footer() {
  return (
    <section className='footer-cont'>
        <Container sx={{display:"flex",justifyContent:"center",alignItems:"stretch",flexDirection:"column"}}>
          <div className='footer-logo-text'>
          <img src={footerLogo}/>
            <p className='footer-text'> Escuela Superior de Periodismo Deportivo "José R. López Pájaro"

(A-777) del Círculo de Periodistas Deportivos de Buenos Aires. </p>
          </div>
          <div className='footer-social-cont'>
            <div className='footer-social'>
                <EmailSharpIcon/>
                <XIcon/>
                <LinkedInIcon/>
            </div>
            <div className='footer-info'>
            Rodríguez Peña 628, CP1020, Ciudad Autónoma de Buenos Aires

Tel: (011) 4485-5213

Whatsapp +5491151337164

informes@escuelacirculo.edu.ar 
            </div>
          </div>
        </Container>
    </section>
  )
}

export default Footer