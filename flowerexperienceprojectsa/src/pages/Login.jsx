import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import light_logo_red from '../assets/logo-redonda-light.png';
import dark_logo_red from '../assets/logo-redonda-dark.png';

const Login = ({ theme, setTheme, handleLogin }) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate(); // Para redirecionar após login

    const handleSubmit = () => {
        // Recupera todos os usuários do localStorage
        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    
        // Verifica se o usuário existe e se a senha está correta
        const usuario = usuarios.find(user => user.email === email);
    
        if (usuario && usuario.senha === senha) {
            alert("Login realizado com sucesso!");
            handleLogin(false); // Chama a função de login com isAdmin false
            localStorage.setItem('emailLogado', email); // Armazena o email logado
            navigate('/usuario'); // Redireciona para a página do usuário
        } else if (email === 'adm@gmail.com' && senha === '123') {
            alert("Login como administrador realizado com sucesso!");
            handleLogin(true); // Chama a função de login com isAdmin true
            navigate('/'); // Redireciona para a página inicial
        } else {
            alert("E-mail ou senha incorretos.");
        }
    };

    return (
        <div className='login'>
            <div className='container-login'>
                <div className='login-logo'>
                    <img src={theme === 'dark' ? light_logo_red : dark_logo_red} alt='Logo' className='logo-red-css' />
                </div>
                <div className='login-text'>
                    <p>ENTRE E ACOMPANHE A SUA ASSINATURA EM UM SÓ LUGAR!</p>
                </div>
                <div className='login-container-inputs'>
                    <div className='login-inputs'>
                        <p>E-MAIL</p>
                        <input 
                            type='text' 
                            className='input-login' 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                        <p>SENHA</p>
                        <input 
                            type='password' 
                            className='input-login' 
                            value={senha} 
                            onChange={(e) => setSenha(e.target.value)} 
                        />
                    </div>
                </div>
                <div className='login-button'>
                    <button className='btn-login' onClick={handleSubmit}>ENTRAR</button>
                    <p>Não possui uma conta?</p>
                    <Link to='/cadastro' className='cad-btn'>Cadastre-se</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
