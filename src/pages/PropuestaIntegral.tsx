import { Box, Container, useMediaQuery } from '@mui/material'
import Propuesta1 from "../assets/fotos/propuesta1.jpg"
import Propuesta2 from "../assets/fotos/propuesta2.jpg"

function PropuestaIntegral() {


  const matches = useMediaQuery('(min-width:600px)');


  return (
    <section className='nuestra-historia'>
      <Container sx={{padding:matches? "0":"2rem", paddingTop:"2rem",}}>
      <p className='home-inscripciones-cont-p1'>PROPUESTA INTEGRAL</p>
      <div className="divider"></div>
      <p className='text-white-gen'>La Escuela otorga el título de Técnico Superior en Periodismo con orientación en Deportes, que es de nivel terciario, tiene reconocimiento oficial y validez nacional.
El objetivo de la carrera es capacitar al alumno para desempeñarse en todas las ramas del periodismo, con especialización en deportes.
Es la única escuela en el país que desarrolla la formación integral del periodista, combinando las funciones teóricas de las carreras terciarias y universitarias de Comunicación Social con los talleres de práctica profesional. Además de la amplia opción de especialización en deportes.
Nuestra carrera se basa en tres ejes: 
</p>
<Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",flexDirection:matches?"row":"column"}}>
<ul style={{padding:matches? "":"1.5rem"}}>
    <li className='text-white-gen'>Formación periodística: Periodismo escrito (gráfico, necesidades digitales y formatos en las redes sociales), radial y televisivo, con apoyos específicos en expresión escrita, oral y locución.
    </li>
    <li className='text-white-gen'>Formación deportiva: Se dictan materias con orientación en historia, técnica, táctica y estrategia. Hay materias exclusivas sobre fútbol, voleibol, automovilismo, básquetbol, rugby, hockey sobre césped, natación, polo, hockey sobre patines, boxeo, golf, atletismo, béisbol y softbol. Además, hay cátedras especiales en deportes náuticos, deportes adaptados y paralímpicos.  Otras asignaturas en la especialización son organización deportiva, teoría del entrenamiento y psicología del deporte.
    </li>
    <li className='text-white-gen'>Formación general: Integrada por asignaturas que tienen por objetivo ampliar la base de cultura general y dar una sólida formación humanística. También se dictan cuatro niveles de inglés a lo largo de los últimos dos años.
    </li>
</ul>
<Box sx={{padding:matches?"":"2rem"}}>
    <img src={Propuesta1} alt="" style={{padding:"1rem",maxWidth:"90vw"}}  />
    <img src={Propuesta2} alt=""  style={{padding:"1rem",maxWidth:"90vw"}}/>
</Box>
</Box>
      </Container>
    </section>
  )
}

export default PropuestaIntegral

