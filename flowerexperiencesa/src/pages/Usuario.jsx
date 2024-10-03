import React from 'react';
import './Usuario.css';
import FotoUser from '../components/FotoUser/FotoUser';

const Usuario = ({ theme, setTheme }) => {
    return (
        <div className='usuario'>
            <div className='principal'>
                <div className='infos-usuario'>
                    <div className="foto-usuario">
                        <div className="foto">
                                                    
                        </div>
                    </div>
                    <div className="nome-usuario">
                        <p>Olá (NOME DA PESSOA)</p>
                    </div>
                    <div className="input-usuario">
                        <p>NOME</p>
                        <input className='input-css' type='text' placeholder='Nome do Usuário' />
                        <p>E-MAIL</p>
                        <input className='input-css' type='text' placeholder='********************' />
                        <p>SENHA</p>
                        <input className='input-css' type='password' placeholder='*********' />
                    </div>
                    <div className="button-usuario">
                        <button className='button-edituser-css'>EDITAR USER</button>
                        <button className='button-excluiruser-css'>EXCLUIR USER</button>
                    </div>
                </div>
                <div className="assinaturas-usuario">
                    <div className="scroll-assinaturas"></div>
                </div>
            </div>
        </div>
    );
}

export default Usuario;
