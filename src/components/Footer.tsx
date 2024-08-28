import { Container, useMediaQuery } from '@mui/material'

import footerLogo from "../assets/pwa-192x192.png"
import EmailSharpIcon from '@mui/icons-material/EmailSharp';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';


function Footer() {



  const matches = useMediaQuery('(min-width:600px)');


  return (
    <section className='footer-cont'>
        <Container sx={{display:"flex",justifyContent:"center",alignItems:"stretch",flexDirection:"column"}}>
          <div className='footer-logo-text'>
          <img src={footerLogo} style={{height:"5rem"}}/>
            <p className='footer-text'> Escuela Superior de Periodismo Deportivo "José R. López Pájaro"

(A-777) del Círculo de Periodistas Deportivos de Buenos Aires. </p>
          </div>
          <div className='footer-social-cont'>
            <div className='footer-social'>
              <a>
              <YouTubeIcon/>
              </a>
              <a>
              <EmailSharpIcon/>
              </a>
               <a href="">
               <XIcon/>
               </a>
              <a >
              <LinkedInIcon/>
              </a>
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