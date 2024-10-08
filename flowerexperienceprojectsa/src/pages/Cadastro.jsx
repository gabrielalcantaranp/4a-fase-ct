import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Cadastro.css';
import light_logo_red from '../assets/logo-redonda-light.png'
import dark_logo_red from '../assets/logo-redonda-dark.png'

const Cadastro = ({ theme, setTheme }) => {

    return (
        <div className='cadastro'>
            <div className='container-cadastro'>

            <div className='cadastro-logo'>
                <img src={theme == 'dark' ? light_logo_red : dark_logo_red} alt='' className='logo-red-css-cad' />
            </div>

            <div className='cadastro-text'>
                <p>ASSINE E ACOMPANHE SUA ASSINATURA EM UM SÓ LUGAR!</p>
            </div>

            <div className='cadastro-container-inputs'>
                <div className='cadastro-inputs'>
                    <p>NOME </p>
                    <input type='text' className='input-cadastro'></input>
                    <p>E-MAIL</p>
                    <input type='password' className='input-cadastro'></input>
                    <p>SENHA</p>
                    <input type='text' className='input-cadastro'></input>
                    <p>CONFIRMAR SENHA</p>
                    <input type='password' className='input-cadastro'></input>
                </div>
            </div>

            <div className='cadastro-button'>
                <button className='btn-cadastro'>CADASTRAR</button>
                <p>Já possui uma conta?</p><Link to='/login' className='cad-btn'>Login</Link>
            </div>

            </div>
            
        </div>
    );
}

export default Cadastro;
