import { Box, Container } from '@mui/material'
import NuestraHistoria1 from "../assets/fotos/nuestra-historia-1.jpg"
import NuestraHistoria2 from "../assets/fotos/nuestra-historia-2.jpg"
import NuestraHistoria3 from "../assets/fotos/nuestra-historia-3.jpg"

function NuestraHistoria() {
  return (
    <section className='nuestra-historia'>
        <Container>
            <p className='home-inscripciones-cont-p1'>NUESTRA HISTORIA
                <br />
CÍRCULO DE PERIODISTAS DEPORTIVOS
</p>
    <Box>
        <Box sx={{display:"flex",justifyContent:"space-around",alignItems:"center",marginBottom:"3rem"}}><p style={{flex:3,fontFamily:"Rubik",fontSize:"1.2rem",lineHeight:"1.5rem",padding:"1.5rem 2rem"}}>El 24 de mayo de 1941 se fundó el Círculo de Periodistas Deportivos. Hugo Marini (jefe de Deportes de Crítica), Salustiano González (jefe de Deportes de El Mundo), Emilio Rubio (de Noticias Gráficas), José López Pájaro (director de la Revista La Cancha), Alfredo Rossi (La Prensa), Ricardo Lorenzo "Borocotó" (Revista El Gráfico), Danilo Manzini (La Razón) e Idelfonso Talarúa Kendall (La Razón) firmaron el acta de fundación y convocaron a una Asamblea General para conformar la primera Comisión Directiva de la institución.
Según el documento, el Círculo tiene como objetivos facilitar la labor del cronista y obtener garantías esenciales en su relación con asociaciones, clubes y autoridades públicas; servir de punto de contacto para que se traten y conozcan todos los periodistas deportivos; establecer la ayuda mutua para casos especiales; propiciar actos de carácter técnico y cultural; promover entre sus asociados el conocimiento de otros ambientes del interior y exterior; y establecer relaciones con organismos de cronistas del interior y exterior.
</p><img src={NuestraHistoria1} alt="" style={{flex:1,maxWidth:"60%",padding:"1.5rem"}}/></Box>
        <Box   sx={{display:"flex",justifyContent:"space-around",alignItems:"center"}}><p  style={{flex:3,fontFamily:"Rubik",fontSize:"1.2rem",lineHeight:"1.5rem"}}>En primera instancia, el Círculo de Periodistas Deportivos compartió la sede con el Círculo de la Prensa, ubicado en Rodríguez Peña 80. Allí se rubricó el acta fundacional y funcionó como casa del organismo por más de una década.
En 1951 se mudó a una dependencia de la Confederación Argentina de Deportes, en Carlos Pellegrini 1362. Un año después, la Comisión Directiva decidió avanzar en la compra de un edificio para tener una sede propia.
El 28 de junio de 1954 se concretó la adquisición de una casa de tres plantas situada en Rodríguez Peña 628 y la escritura se terminó de firmar el 2 de diciembre de ese mismo año. Finalmente, la flamante sede fue inaugurada en la mañana del 27 de diciembre de 1955, en donde hasta la actualidad han recibido a miles periodistas deportivos de todo el mundo con afecto y generosidad.
En 1954 el Círculo le dio vida a la distinción más importante del deporte argentino como lo es el Premio Olimpia. El primero que entregaron fue a Juan Manuel Fangio, en el Luna Park, en reconocimiento a sus logros en el año. Luego, en 1970, se incorporaron los premios Olimpia de Plata a los deportistas más destacados de cada actividad. Pascual Pérez, Nicolino Locche, Roberto de Vicenzo, Horacio Accavallo, Carlos Monzón, Guillermo Vilas, Diego Maradona, Santos Laciar, Gabriela Sabatini, Emanuel Ginóbili, David Nalbandián, Juan Martín Del Potro y Lionel Messi son algunos de los que recibieron la estatuilla, elegidos por los socios e integrantes de la institución.
</p><img src={NuestraHistoria2} alt="" style={{flex:1,maxWidth:"60%",padding:"1.5rem"}} /></Box>
        <Box  sx={{display:"flex",justifyContent:"space-around",alignItems:"center"}}><p  style={{flex:3,fontFamily:"Rubik",fontSize:"1.2rem",lineHeight:"1.5rem"}}>El 1° de julio de 1960 se formalizó otro gran sueño: crear la primera escuela de periodismo deportivo de la Argentina, ubicada en el mismo edificio de la sede, a la que llamaron "José López Pájaro" en homenaje a uno de sus fundadores y hombre fundamental para llevar a cabo la iniciativa.
De aquella primera generación de alumnos se encuentran Ernesto Cherquis Bialo, Héctor Vega Onesime, Eduardo Alperín, Ernesto Muñiz, Néstor Ibarra y Diego Bonadeo, entre otros. Con el paso de los años, la Escuela se convirtió en un lugar de referencia para la profesión y funcionó como "fábrica" de reconocidos periodistas deportivos que consolidaron una extensa carrera profesional en los medios de comunicación más importantes del país. 
</p><img src={NuestraHistoria3} alt="" style={{flex:1,maxWidth:"60%",padding:"1.5rem"}} /></Box>
    </Box>
        </Container>
    </section>
  )
}

export default NuestraHistoria