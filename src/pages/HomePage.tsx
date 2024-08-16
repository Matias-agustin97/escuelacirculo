
 //sin este comentario se descajetea todo el ts, NO TOQUES NADA SALAME !!!!
 // @ts-ignore
import {Splide, SplideSlide} from "@splidejs/react-splide"
import '@splidejs/react-splide/css';
import carrusel1 from "../assets/fotos/carrusel1.png"
import carrusel2 from "../assets/fotos/carrusel1.png"
import carrusel3 from "../assets/fotos/carrusel1.png"
import { Box, Button, Container, Divider, IconButton, ImageList, ImageListItem, ImageListItemBar, Typography, useMediaQuery } from "@mui/material";
import { Height, Info } from "@mui/icons-material";

import Video1 from "../assets/videos/GASTON EDUL FRASE 1.mp4"
import Video2 from "../assets/videos/GASTON EDUL FRASE 2.mp4"
import Video3 from "../assets/videos/video_galeria1.mp4"
import Video4 from "../assets/videos/video_galeria2.mp4"

const itemData = [
 
  
  {
    img: Video1,
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
            <img src={carrusel1} alt=""/>
          </SplideSlide>
        <SplideSlide>
            <img src={carrusel2} alt="Image 2"/>
        </SplideSlide>
       <SplideSlide>
            <img src={carrusel3}/>
        </SplideSlide>
        </Splide>
      </section>
      <section className="landing-svg-section">

      <h1>Estudia Periodismo deportivo</h1>
     
       <Container sx={{paddingBottom:matches? "1rem" :"3rem"}}>
       <h3 style={{marginTop:"1.5rem",textAlign:"right"}}>Formando profesionales desde 1960</h3>
      <Typography mb="3rem" mt="1rem" textAlign="right">
   

La Escuela Superior de Periodismo Deportivo "José R. López Pájado" del Circulo de Periodistas Deportivos de Buenos Aires forma a los mejores y más destacados profesionales desde 1961, siendo la primera institución en hacerlo en toda América.

Hoy seguimos formando con la misma pasión y el mismo compromiso que el primer día, proyectando nuestra historia y tradición al futuro. ¿Querés se periodista deportivo? Estudiá con nosotros. 

      </Typography>
       <Button color="secondary" variant="contained" sx={{marginLeft:"2rem",px:"2rem"}}><p style={{color:"#ffd"}}><a href="https://escuelacpd.quinttos.com/">INGRESA A QUINTTOS</a></p></Button>
       </Container>
      </section>
     </Container>
      
    </main>
    <section className="nuestra-escuela-cont">
      <Container>
        <div className="videos-cont">
          <h5>Conoce la escuela</h5>
          <div className="divider"></div>
          <Container sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <iframe id="cc-m-video-youtu-container-14679679627" className="video-cont" frameBorder="0" allowFullScreen={true} data-src="https://www.youtube-nocookie.com/embed/6HYXZXOCj30?wmode=transparent&amp;vq=hd1080" src="https://www.youtube-nocookie.com/embed/6HYXZXOCj30?wmode=transparent&amp;vq=hd1080">
</iframe>
<iframe id="cc-m-video-youtu-container-14679679827" className="video-cont" frameBorder="0" allowFullScreen={true}  data-src="https://www.youtube-nocookie.com/embed/m9CidF5f0Kw?wmode=transparent&amp;vq=hd1080" src="https://www.youtube-nocookie.com/embed/m9CidF5f0Kw?wmode=transparent&amp;vq=hd1080">
</iframe>
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


