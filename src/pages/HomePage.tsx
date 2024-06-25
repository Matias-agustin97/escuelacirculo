
 //sin este comentario se descajetea todo el ts, NO TOQUES NADA SALAME !!!!
 // @ts-ignore
import {Splide, SplideSlide} from "@splidejs/react-splide"
import '@splidejs/react-splide/css';
import carrusel1 from "../assets/fotos/carrusel1.png"
import carrusel2 from "../assets/fotos/carrusel1.png"
import carrusel3 from "../assets/fotos/carrusel1.png"

function HomePage() {




  const options = {
    type         : 'loop',
    gap          : '1rem',
    autoplay     : true,
    pauseOnHover : false,
    resetProgress: false,
    height:"900px"
  };







  return (
    <main className="landing-home">
      <section className="carrusel-section">
        <Splide aria-label="carrusel de imagenes" options={options} >
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
       
      </section>
    </main>
  )
}

export default HomePage


