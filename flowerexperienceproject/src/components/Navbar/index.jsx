import React from 'react'
import './index.css';
import logo from '../../assets/logo.png';
import logo_light from '../../assets/logo_light.png';
import pesquisar_um from '../../assets/pesquisar_um.png';
import pesquisar_dois from '../../assets/pesquisar_dois.png';
import modo_claro from '../../assets/modo_claro.png';
import modo_escuro from '../../assets/modo_escuro.png'

const Navbar = ({theme, setTheme}) => {

    const toggle_mode = ()=>{
        theme == 'light' ? setTheme('dark') : setTheme('light');
    }

    return (
        <div className='container'>

            <img src={theme == 'light' ? logo : logo_light} alt="" className='logo' />

            <ul>
                <li>HOME</li>
                <li>ARRANJOS</li>
                <li>PLANTAS</li>
                <li>DESIDRATADAS</li>
                <li>ORQUÍDEAS</li>
            </ul>

            <div className='search-box'>
                <input type="text" placeholder='Procure uma categoria'/>
                <img src={theme == 'light' ? pesquisar_dois : pesquisar_um} className='icon-css'/>
            </div>

            <img onClick={()=>{toggle_mode()}} src={theme == 'light' ? modo_escuro : modo_claro} className='toggle-icon'/>
        </div>
    )
}

export default Navbar