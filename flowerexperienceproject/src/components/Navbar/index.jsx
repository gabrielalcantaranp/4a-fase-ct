import React from 'react'
import './Index.css'
import Logo from '../Logo/index'
import Button from '../Button/index'
import Navinfo from '../Navinfo/index'



function Navbar() {
    return (
        <>
            <div className='navbar-quarter'>
                <p className='navbar-quarter-text'>ENTREGA PARA O MESMO DIA NOS PEDIDOS FEITOS ATÉ ÀS 12H</p>
            </div>

            <div className='navbar-container'>

                <div className="divLogo">
                    <Logo />
                </div>

                <div className='divNavgation'>
                    <Button />
                </div>

                <div className='divInfos'>
                    <Navinfo />
                </div>

            </div>
        </>


    )
}

export default Navbar
