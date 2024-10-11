import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Usuario.css';
import Modal from '../components/Modal/Modal';

const Usuario = ({ theme, removePedido, clearPedidos, handleLogout }) => {
    const [usuario, setUsuario] = useState(null);
    const [erro, setErro] = useState('');
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [pedidos, setPedidos] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [modalMessage, setModalMessage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const emailLogado = localStorage.getItem('emailLogado');

        if (emailLogado) {
            const usuarios = JSON.parse(localStorage.getItem('usuarios')) || []; // Carrega todos os usuários
            const dadosUsuario = usuarios.find(user => user.email === emailLogado); // Encontra o usuário pelo email

            if (dadosUsuario) {
                setUsuario(dadosUsuario);
                setNome(dadosUsuario.nome);
                setEmail(dadosUsuario.email);
                setSenha(dadosUsuario.senha);
                setPedidos(dadosUsuario.pedidos || []);
            } else {
                setErro('Usuário não encontrado.');
            }
        } else {
            setErro('Nenhum usuário logado.');
        }
    }, []);

    const handleEditUser = () => {
        if (usuario) {
            const updatedUser = { ...usuario, nome, email, senha, pedidos };
            const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
            const index = usuarios.findIndex(user => user.email === usuario.email); // Encontra o índice do usuário
    
            // Se o e-mail foi alterado, atualize o emailLogado
            if (usuario.email !== email) {
                localStorage.setItem('emailLogado', email); // Atualiza o email logado
            }
    
            usuarios[index] = updatedUser; // Atualiza o usuário no array
            localStorage.setItem('usuarios', JSON.stringify(usuarios)); // Salva o array atualizado
            setUsuario(updatedUser); // Atualiza o estado do usuário
            setModalTitle('Sucesso');
            setModalMessage('Usuário editado com sucesso!');
            setModalOpen(true);
        }
    };

    const handleDeleteUser = () => {
        if (usuario) {
            const confirmDelete = window.confirm('Tem certeza que deseja excluir sua conta?');
            if (confirmDelete) {
                const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
                const updatedUsers = usuarios.filter(user => user.email !== usuario.email); // Remove o usuário
                localStorage.setItem('usuarios', JSON.stringify(updatedUsers)); // Atualiza o localStorage
                localStorage.removeItem('emailLogado');
                handleLogout();
                setModalTitle('Sucesso');
                setModalMessage('Usuário excluído com sucesso!');
                setModalOpen(true);
                navigate('/');
            }
        }
    };

    const handleRemovePedido = (index) => {
        const updatedPedidos = [...pedidos];
        updatedPedidos.splice(index, 1);
        setPedidos(updatedPedidos);

        if (usuario) {
            const updatedUser = { ...usuario, pedidos: updatedPedidos };
            const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
            const userIndex = usuarios.findIndex(user => user.email === usuario.email);
            usuarios[userIndex] = updatedUser; // Atualiza os pedidos do usuário
            localStorage.setItem('usuarios', JSON.stringify(usuarios)); // Salva o array atualizado
        }
    };

    const finalizarPedido = () => {
        if (pedidos.length === 0) {
            setModalTitle('Aviso');
            setModalMessage('Não há pedidos adicionados para finalizar.');
            setModalOpen(true);
            return;
        }
        
        clearPedidos();
        if (usuario) {
            const updatedUser = { ...usuario, pedidos: [] };
            const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
            const userIndex = usuarios.findIndex(user => user.email === usuario.email);
            usuarios[userIndex] = updatedUser; // Limpa os pedidos do usuário
            localStorage.setItem('usuarios', JSON.stringify(usuarios)); // Atualiza o localStorage
            setPedidos([]);
        }
        setModalTitle('Sucesso');
        setModalMessage('Pedido finalizado com sucesso!');
        setModalOpen(true);
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

            <Modal 
                isOpen={modalOpen} 
                onClose={() => setModalOpen(false)} 
                title={modalTitle} 
                message={modalMessage} 
            />
        </div>
    );
}

export default Usuario;

