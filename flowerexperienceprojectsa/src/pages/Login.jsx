import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import light_logo_red from '../assets/logo-redonda-light.png'
import dark_logo_red from '../assets/logo-redonda-dark.png'

const Login = ({ theme, setTheme }) => {

    return (
        <div className='login'>
            <div className='container-login'>

            <div className='login-logo'>
                <img src={theme == 'dark' ? light_logo_red : dark_logo_red} alt='' className='logo-red-css' />
            </div>

            <div className='login-text'>
                <p>ENTRE E ACOMPANHE A SUA ASSINATURA EM UM SÓ LUGAR!</p>
            </div>

            <div className='login-container-inputs'>
                <div className='login-inputs'>
                    <p>E-MAIL</p>
                    <input type='text' className='input-login'></input>
                    <p>SENHA</p>
                    <input type='password' className='input-login'></input>
                </div>
            </div>

            <div className='login-button'>
                <button className='btn-login'>ENTRAR</button>
                <p>Não possui uma conta?</p><Link to='/cadastro' className='cad-btn'>Cadastre-se</Link>
            </div>

            </div>
            
        </div>
    );
}

export default Login;
