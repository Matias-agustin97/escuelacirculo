
 //sin este comentario se descajetea todo el ts, NO TOQUES NADA SALAME !!!!
 // @ts-ignore
import {Splide, SplideSlide} from "@splidejs/react-splide"
import '@splidejs/react-splide/css';
import carrusel1 from "../assets/fotos/carrusel1.png"
import carrusel2 from "../assets/fotos/carrusel1.png"
import carrusel3 from "../assets/fotos/carrusel1.png"
import { Button, Container, Typography } from "@mui/material";
import { Height } from "@mui/icons-material";

function HomePage() {




  const options = {
    height:"100vh",
    type         : 'loop',
    gap          : '1rem',
    autoplay     : true,
    pauseOnHover : false,
    resetProgress: false,
   
  };







  return (
    <>
    <main className="landing-home">
      <section className="carrusel-section">
        <Splide aria-label="carrusel de imagenes" options={options}   >
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
     
       <Container>
       <h3 style={{marginTop:"1.5rem"}}>Formando profesionales desde 1960</h3>
      <Typography mb="3rem" mt="1rem">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Dolore nobis quod repellendus doloremque aliquid cum numquam laborum illum porro
         sed accusantium, rerum consequuntur iste dolorem dignissimos ratione molestias hic rem?
       Quasi, debitis. Recusandae modi animi eligendi officiis magni, iure est quo exercitationem 
       quos rem laboriosam quidem veritatis maiores. Culpa voluptates minima aspernatur eveniet consequuntur suscipit velit perspiciatis rerum reiciendis autem.
      </Typography>
       <Button color="secondary" variant="contained" sx={{marginLeft:"2rem",px:"2rem"}}><p style={{color:"#ffd"}}>INSCRIBITE</p></Button>
       </Container>
      </section>
      
    </main>
    <section className="nuestra-escuela-cont">
      
    </section>
    </>
  )
}

export default HomePage


