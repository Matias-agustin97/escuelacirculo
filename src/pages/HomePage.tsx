
 //sin este comentario se descajetea todo el ts, NO TOQUES NADA SALAME !!!!
 // @ts-ignore
import {Splide, SplideSlide} from "@splidejs/react-splide"
import '@splidejs/react-splide/css';
import carrusel1 from "../assets/fotos/carrusel1.png"
import carrusel2 from "../assets/fotos/carrusel1.png"
import carrusel3 from "../assets/fotos/carrusel1.png"
import { Box, Button, Container, IconButton, ImageList, ImageListItem, ImageListItemBar, Typography } from "@mui/material";
import { Height, Info } from "@mui/icons-material";



const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    author: '@bkristastucchio',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    author: '@helloimnik',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    author: '@nolanissac',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    author: '@hjrc33',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    author: '@tjdragotta',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    author: '@katie_wasserman',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    author: '@silverdalex',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
    author: '@shelleypauls',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    author: '@peterlaster',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    author: '@southside_customs',
    cols: 2,
  },
];











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
     <Container sx={{display:"flex",justifyContent:"space-evenly"}}>
     
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
     </Container>
      
    </main>
    <section className="nuestra-escuela-cont">
     <Container>
      <Box sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <ImageList sx={{ width: "100%", height: "auto",flex:1 }}>
      
      {itemData.map((item) => (
        <ImageListItem key={item.img} sx={{cursor:"pointer"}}>
          <img
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
            
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
           
            
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


