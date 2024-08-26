import { Box, Container, useMediaQuery } from '@mui/material'


function PlanDeEstudios() {


  const matches = useMediaQuery('(min-width:600px)');

  return (
    <section className='nuestra-historia pad-mobile'>
      <Container sx={{paddingTop:"2rem",px:matches?"2rem": "1rem"}}>
        <p className='home-inscripciones-cont-p1'>PLAN DE ESTUDIOS</p>
       
        <Box>
        <div className="divider"></div>
          <p className='home-inscripciones-cont-p2'>PRIMER AÑO</p>
         
          <p className='plan-estudios-h5'>Primer cuatrimestre</p>
          <ul className='text-white-gen'>
         <li> Periodismo gráfico 1</li>
          <li>Expresión escrita 1</li>
<li>Corrientes del pensamiento contemporáneo </li>
<li>Sociología general </li>
<li>Historia de las ideas y de las instituciones</li>
<li>Políticas</li>
<li>Fútbol (técnica | táctica | estrategia)</li>
<li>Vóleibol</li>
<li>Historia del deporte y olimpismo</li>
<li>Béisbol y softbol</li>
<li>Handball</li>

          </ul>
          <div className="divider"></div>
          <p className='home-inscripciones-cont-p1'>Segundo cuatrimestre </p>
        
          <p className='plan-estudios-h5'>Segundo cuatrimeste</p>
          <ul className='text-white-gen'>
            <li>Periodismo gráfico 2</li>
            <li>Expresión escrita 2</li>
            <li>Locución y expresión oral profesional  </li>
            <li>Antropología social y cultural</li>
            <li>Metodología de la investigación social</li>
            <li>Psicología social</li>
            <li>Automovilismo</li>
            <li>Organización deportiva</li>
            <li>Historia del fútbol</li>
            <li>Reglamento de fútbol</li>
          </ul>
          <div className="divider"></div>
          <p className='home-inscripciones-cont-p2'>SEGUNDO AÑO</p>
          <p className='plan-estudios-h5'>PRIMER CUATRIMESTRE</p>
          <ul className='text-white-gen'>
            <li>Periodismo gráfico 3</li>
            <li>Periodismo radial 1</li>
            <li>Producción periodística</li>
            <li>Historia general del periodismo</li>
            <li>Teorías de la comunicación</li>
            <li>Rugby</li>
            <li>Boxeo</li>
            <li>Psicología del deporte</li>
            <li>Natación</li>
            <li>Inglés 1</li>
            <li>Práctica profesionalizante 1 – Proyecto periodístico 1º tramo</li>
          </ul>
          <div className="divider"></div>
          <p className='plan-estudios-h5'>SEGUNDO CUATRIMESTRE</p>
          <ul className="text-white-gen">
            <li>Periodismo gráfico 4</li>
            <li>Periodismo radial 2</li>
            <li>Organización económica de la empresa periodistica</li>
            <li>Historia del periodismo argentino</li>
            <li>Semiología</li>
            <li>Básquetbol</li>
            <li>Tenis</li>
            <li>Atletismo</li>
            <li>Golf</li>
            <li>Inglés 2</li>
            <li>Práctica profesionalizante 2 – Proyecto periodístico 2º tramo</li>
          </ul>
          <div className="divider"></div>
          <p className='home-inscripciones-cont-p2'>TERCER AÑO</p>
          <p className='plan-estudios-h5'>PRIMER CUATRIMESTRE</p>
          <ul className="text-white-gen">
            <li>Periodismo televisivo 1</li>
            <li>Periodismo y nuevas tecnologías de la información 1</li>
            <li>Opinión pública</li>
            <li>Publicidad y comercialización</li>
            <li>Cultura y espectáculos</li>
            <li>Legislación periodística y deportiva</li>
            <li>Hockey sobre césped</li>
            <li>Deportes náuticos</li>
            <li>Seminarios</li>
            <li>Inglés 3</li>
            <li>Práctica profesionalizante 3 – Proyecto periodístico 3º tramo</li>
          </ul>
          <div className="divider"></div>
          <p className='plan-estudios-h5'>SEGUNDO CUATRIMESTRE</p>
          <ul className="text-white-gen">
            <li>Periodismo televisivo 2</li>
            <li>Análisis de los medios</li>
            <li>Periodismo y nuevas tecnologías de la información 2</li>
            <li>Ética profesional</li>
            <li>Medicina deportiva</li>
            <li>Sociología del deporte</li>
            <li>Teoría del entrenamiento deportivo</li>
            <li>Ciclismo</li>
            <li>Polo</li>
            <li>Hockey sobre patines</li>
            <li>Deportes adaptados y paralímpicos</li>
            <li>Inglés 4</li>
            <li>Práctica profesionalizante 4 – Proyecto periodístico 4º tramo</li>
          </ul>
        </Box>
      </Container>
    </section>
  )
}

export default PlanDeEstudios