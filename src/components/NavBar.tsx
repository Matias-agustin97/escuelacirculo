import React from 'react'
import Logo from "../assets/navLogo.jpg"
import { Outlet } from 'react-router-dom'
function NavBar() {
  return (
   <>
    <header>
      <img src={Logo} alt="Logo de la escuela" />
        <nav className='navbar'>
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Nuestra escuela</a></li>
            <li><a href="">Lista ?</a></li>
            <li><a href="">Inscribite</a></li>
          </ul>
        </nav>
    </header>
    <Outlet/>
   </>
  )
}

export default NavBar