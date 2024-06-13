import React from 'react'
import Logo from "../assets/logo.jpg"
function NavBar() {
  return (
    <header>
      <img src={Logo} alt="Logo de la escuela" />
        <nav>
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Nuestra escuela</a></li>
            <li><a href="">Lista ?</a></li>
            <li><a href="">Inscribite</a></li>
          </ul>
        </nav>
    </header>
  )
}

export default NavBar