
 //sin este comentario se descajetea todo el ts, NO TOQUES NADA SALAME !!!!
 // @ts-ignore
import {Splide, SplideSlide} from "@splidejs/react-splide"
import '@splidejs/react-splide/css';
import carrusel1 from "../assets/fotos/carrusel1.png"
import carrusel2 from "../assets/fotos/carrusel_nuevo2.jpeg"
import carrusel3 from "../assets/fotos/carrusel_nuevo3.jpeg"
import carrusel4 from "../assets/fotos/carrusel_nuevo4.jpeg"
import carrusel5 from "../assets/fotos/carrusel_nuevo5.jpeg"
import { Box, Container, Divider, ImageList, ImageListItem, ImageListItemBar, Typography, useMediaQuery } from "@mui/material";
import { Instagram, MailOutlined, PhoneCallback, WhatsApp } from "@mui/icons-material";
//import Video2 from "../assets/videos/GASTON EDUL FRASE 2.mp4"
//import Video3 from "../assets/videos/video_galeria1.mp4"
//import Video4 from "../assets/videos/video_galeria2.mp4"
//import 
const itemData = [
 
  
  {
    img: "//f",
    title: 'Bike',
    text: 'Gaston Edul',
    cols: 4,
  },
  {
    img: "//asdfdsad",
    title: 'Bike',
    text: 'Gaston Edul',
    cols: 4,
  }, {
    img: "//assdfdad",
    title: 'Bike',
    text: 'Gaston Edul',
    cols: 4,
  }, {
    img: "//asffdad",
    title: 'Bike',
    text: 'Gaston Edul',
    cols: 4,
  }, 
  
];











function HomePage() {




  const options = {
    height:"70vh",
    type         : 'loop',
    gap          : '1rem',
    autoplay     : true,
    pauseOnHover : false,
    resetProgress: false,
   
  };

  const optionsMobile={
    height:"45vh",
    type         : 'loop',
    gap          : '1rem',
    autoplay     : true,
    pauseOnHover : false,
    resetProgress: false,
  }

  const matches = useMediaQuery('(min-width:600px)');




  return (
    <>
    <main className="landing-home">
     <Container sx={{display:"flex",justifyContent:"space-evenly",paddingTop:"3rem",flexDirection: matches? "row":"column-reverse"}}>
     
      <section className="carrusel-section">
        <Splide aria-label="carrusel de imagenes" options={matches? options : optionsMobile}   >
          <SplideSlide>
            <img src={carrusel1} alt="" />
          </SplideSlide>
        <SplideSlide>
            <img src={carrusel2} alt="Image 2" style={{height:"100%",width:"100%"}}/>
        </SplideSlide>
       <SplideSlide>
            <img src={carrusel3} style={{height:"100%",width:"100%"}}/>
        </SplideSlide>
        <SplideSlide>
            <img src={carrusel4} alt="" style={{height:"100%",width:"100%"}}/>
          </SplideSlide>
          <SplideSlide>
            <img src={carrusel5} alt="" style={{height:"100%",width:"100%"}}/>
          </SplideSlide>
        </Splide>
      </section>
      <section className="landing-svg-section">

      <h1>Estudia Periodismo deportivo</h1>
     

       <Container sx={{paddingBottom:matches? "1rem" :"3rem"}}>
        <h4  style={{marginTop:"1.5rem",textAlign:"right"}}>ESCUELA SUPERIOR DE PERIODISMO DEPORTIVO</h4>
       <h3 style={{marginTop:"1.5rem",textAlign:"right",fontStyle:"italic"}}>José R. López Pájaro</h3>
      <Typography mb="3rem" mt="1rem" textAlign="right">Rodríguez Peña 628, Ciudad de Buenos Aires</Typography>
      <Typography sx={{display:"flex",alignItems:"center",padding:"0.45rem 0.4rem"}} fontSize="1.4rem"><WhatsApp/><a  href="https://walink.co/447686" rel="nofollow" title="Whatsapp" target="_blank">+54 9 11 5133-7164</a></Typography>
      <Typography  sx={{display:"flex",alignItems:"center",padding:"0.25rem 0.4rem"}}  fontSize="1.4rem"><MailOutlined/><a href="mailto:consultas@escuelacirculo.edu.ar">consultas@escuelacirculo.edu.ar</a></Typography>
       <Typography  sx={{display:"flex",alignItems:"center",padding:"0.25rem 0.4rem"}}  fontSize="1.4rem"><PhoneCallback/><a href="tel:+ 011-4485-5213"> 011-4485-5213</a></Typography>
       <Typography sx={{display:"flex",alignItems:"center",padding:"0.45rem 0.4rem"}}  fontSize="1.4rem"><Instagram/><a href="https://www.instagram.com/escueladelcirculo/" target="_blank">@escueladelcirculo</a></Typography>
       </Container>
      </section>
     </Container>
      
    </main>
    <section className="nuestra-escuela-cont">
      <Container>
        <div className="home-inscripciones-cont">
          <h5>INSCRIPCIONES CICLO LECTIVO 2025</h5>
          <p className="home-inscripciones-cont-p1">Te esperamos para desarrollar la formación hacia tu anhelo profesional</p>
          <p className="home-inscripciones-cont-p2">- Ingreso 2025: Se desarrollará hasta el 31 de marzo.
        <br />
- Inicio de ciclo lectivo: tercera semana de marzo de 2025
</p>
<p className="home-inscripciones-cont-p1">Somos la casa del periodismo deportivo en Argentina
</p>
<p className="home-inscripciones-cont-p2">- Desde 1954, entregamos los Premios Olimpia a la excelencia en el
deporte argentino.
<br />
- Desde 1960, formamos a las nuevas generaciones de comunicadores
de Latinoamérica con pasión por informar deportes.
<br />
- Desde 2023, somos Patrimonio Cultural de la Ciudad de Buenos Aires
Tecnicatura Superior en Periodismo con Orientación en Deportes Res. 49/SSGECP/12 y Disp. DI-2014-226-DGEGP
<br />
- TÍTULO OFICIAL
<br />
- NIVEL TERCIARIO
<br />
- DURACIÓN TRES AÑOS
<br />
-MODALIDAD PRESENCIAL (TURNOS MAÑANA Y TARDE),
HÍBRIDA (TURNO NOCHE)*
<br />
*50% PRESENCIAL Y 50% VIRTUAL -SINCRÓNICA-. SEGUNDOS Y
TERCEROS AÑOS TURNO NOCHE UN DÍA CON MATERIAS ASINCRÓNICAS.

</p>
          <div className="divider"></div>
          <Container sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
      
          </Container>
        </div>
      </Container>
      <Divider/>
     <Container>
      <Box sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <ImageList sx={{ width: "100%", height: "auto",flex:1 }}>
      
      {itemData.map((item) => (
        <ImageListItem key={item.img} sx={{cursor:"pointer"}}>
          <video
           
            
            src={item.img}
            
            
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.text}
           
            
          />
        </ImageListItem>
      ))}
    </ImageList>
      </Box>
     </Container>
     <article style={{flex:1}}>
      <Typography>SOBRE LA ESCUELA</Typography>
     </article>
    </section>
    </>
  )
}

export default HomePage


