import React from 'react'
import './Index.css'
import Button from '../Button/index'
import Logo from '../Logo/index'


function Navbar() {
  return (
    <div className='navbar-container'>

        <div className="divLogo">
        <Logo/>
        </div>

        <div className='divNavgation'>
          <text className='textNavigation'>Remédios</text>
          <text className='textNavigation'>Como chegar</text>
          <text className='textNavigation'>Fale Conosco</text>
          <text className='textNavigation'>Quem somos</text>
        </div>

        <div className="divButton">
        <Button/>
        </div>
      
   </div>

           
   
   )
}

export default Navbar
