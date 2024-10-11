import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Usuario.css';

const Usuario = ({ theme, pedidos, removePedido, clearPedidos, handleLogout }) => {
    const [usuario, setUsuario] = useState(null);
    const [erro, setErro] = useState('');
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const emailLogado = localStorage.getItem('emailLogado');

        if (emailLogado) {
            const dadosUsuario = JSON.parse(localStorage.getItem(emailLogado));
            if (dadosUsuario) {
                setUsuario(dadosUsuario);
                setNome(dadosUsuario.nome);
                setEmail(dadosUsuario.email);
                setSenha(dadosUsuario.senha);
            } else {
                setErro('Usuário não encontrado.');
            }
        } else {
            setErro('Nenhum usuário logado.');
        }
    }, []);

    const handleEditUser = () => {
        if (usuario) {
            const updatedUser = { ...usuario, nome, email, senha };
            localStorage.setItem(email, JSON.stringify(updatedUser));
            localStorage.setItem('emailLogado', email);
            alert('Usuário editado com sucesso!');
        }
    };

    const handleDeleteUser = () => {
        if (usuario) {
            const confirmDelete = window.confirm('Tem certeza que deseja excluir sua conta?');
            if (confirmDelete) {
                console.log(`Excluindo usuário: ${usuario.email}`);
                localStorage.removeItem(usuario.email); // Remove os dados do usuário
                localStorage.removeItem('emailLogado'); // Remove o email logado
                handleLogout(); // Desloga o usuário
                clearPedidos(); // Limpa os pedidos
                alert('Usuário excluído com sucesso!');
                navigate('/'); // Redireciona para a página inicial
            }
        }
    };

    const handleRemovePedido = (index) => {
        removePedido(index);
    };

    const finalizarPedido = () => {
        clearPedidos();
        alert('Pedido finalizado com sucesso!');
    };

    return (
        <div className='div-user'>
            <div className='principal-user-div'>
                <div className='p-esquerda'>
                    <div className="foto-usuario">
                        <div className="foto"></div>
                    </div>
                    <div className="nome-usuario">
                        <p>Olá {usuario ? usuario.nome : 'usuário'}</p>
                    </div>
                    <div className="input-usuario">
                        <p>NOME</p>
                        <input
                            className='input-css'
                            type='text'
                            value={nome}
                            placeholder='Nome do Usuário'
                            onChange={(e) => setNome(e.target.value)}
                        />
                        <p>E-MAIL</p>
                        <input
                            className='input-css'
                            type='text'
                            value={email}
                            placeholder='E-mail do Usuário'
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <p>SENHA</p>
                        <input
                            className='input-css'
                            type='password'
                            value={senha}
                            placeholder='Senha do Usuário'
                            onChange={(e) => setSenha(e.target.value)}
                        />
                    </div>
                    <div className="button-usuario">
                        <button className='button-edituser-css' onClick={handleEditUser}>EDITAR USER</button>
                        <button className='button-excluiruser-css' onClick={handleDeleteUser}>EXCLUIR USER</button>
                    </div>
                </div>

                <div className='p-direita'>
                    <p className='titulo-pedidos'>MEUS PEDIDOS</p>
                    <div className='pedidos-usuario'>
                        {pedidos.length > 0 ? (
                            pedidos.map((pedido, index) => (
                                <div key={index} className='pedido-card'>
                                    <p>{pedido.quantidade} {pedido.nome}(s)</p>
                                    <button onClick={() => handleRemovePedido(index)}>❌</button>
                                </div>
                            ))
                        ) : (
                            <p>{erro ? erro : 'Nenhum pedido encontrado.'}</p>
                        )}
                    </div>
                    <button onClick={finalizarPedido} className='button-edituser-css-dois'>FINALIZAR PEDIDO</button>
                </div>
            </div>
        </div>
    );
}

export default Usuario;
