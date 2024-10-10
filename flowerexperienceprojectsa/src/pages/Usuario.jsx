// import React from 'react';
// import './Usuario.css';
// import FotoUser from '../components/FotoUser/FotoUser';

// const Usuario = ({ theme, setTheme }) => {
//     return (
//         <div className='div-user'>
//             <div className='principal-user-div'>
//                 <div className='p-esquerda'>
//                     <div className="foto-usuario">
//                         <div className="foto">

//                         </div>
//                     </div>
//                     <div className="nome-usuario">
//                         <p>Olá (NOME DA PESSOA)</p>
//                     </div>
//                     <div className="input-usuario">
//                         <p>NOME</p>
//                         <input className='input-css' type='text' placeholder='Nome do Usuário' />
//                         <p>E-MAIL</p>
//                         <input className='input-css' type='text' placeholder='********************' />
//                         <p>SENHA</p>
//                         <input className='input-css' type='password' placeholder='*********' />
//                     </div>
//                     <div className="button-usuario">
//                         <button className='button-edituser-css'>EDITAR USER</button>
//                         <button className='button-excluiruser-css'>EXCLUIR USER</button>
//                     </div>

//                 </div>

//                 <div className='p-direita'>
//                     <p className='titulo-pedidos'>MEUS PEDIDOS</p>
//                     <div className='pedidos-usuario'>
//                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, dolor. Odio eius illo esse qui facilis natus quibusdam vitae? Reprehenderit qui eum ducimus tenetur impedit dolore fugiat nemo quas maxime?</p>
//                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, dolor. Odio eius illo esse qui facilis natus quibusdam vitae? Reprehenderit qui eum ducimus tenetur impedit dolore fugiat nemo quas maxime?</p>
//                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, dolor. Odio eius illo esse qui facilis natus quibusdam vitae? Reprehenderit qui eum ducimus tenetur impedit dolore fugiat nemo quas maxime?</p>
//                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, dolor. Odio eius illo esse qui facilis natus quibusdam vitae? Reprehenderit qui eum ducimus tenetur impedit dolore fugiat nemo quas maxime?</p>
//                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, dolor. Odio eius illo esse qui facilis natus quibusdam vitae? Reprehenderit qui eum ducimus tenetur impedit dolore fugiat nemo quas maxime?</p>
//                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, dolor. Odio eius illo esse qui facilis natus quibusdam vitae? Reprehenderit qui eum ducimus tenetur impedit dolore fugiat nemo quas maxime?</p>
//                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, dolor. Odio eius illo esse qui facilis natus quibusdam vitae? Reprehenderit qui eum ducimus tenetur impedit dolore fugiat nemo quas maxime?</p>
//                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, dolor. Odio eius illo esse qui facilis natus quibusdam vitae? Reprehenderit qui eum ducimus tenetur impedit dolore fugiat nemo quas maxime?</p>
//                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, dolor. Odio eius illo esse qui facilis natus quibusdam vitae? Reprehenderit qui eum ducimus tenetur impedit dolore fugiat nemo quas maxime?</p>
//                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, dolor. Odio eius illo esse qui facilis natus quibusdam vitae? Reprehenderit qui eum ducimus tenetur impedit dolore fugiat nemo quas maxime?</p>
//                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, dolor. Odio eius illo esse qui facilis natus quibusdam vitae? Reprehenderit qui eum ducimus tenetur impedit dolore fugiat nemo quas maxime?</p>
//                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, dolor. Odio eius illo esse qui facilis natus quibusdam vitae? Reprehenderit qui eum ducimus tenetur impedit dolore fugiat nemo quas maxime?</p>
//                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, dolor. Odio eius illo esse qui facilis natus quibusdam vitae? Reprehenderit qui eum ducimus tenetur impedit dolore fugiat nemo quas maxime?</p>
//                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, dolor. Odio eius illo esse qui facilis natus quibusdam vitae? Reprehenderit qui eum ducimus tenetur impedit dolore fugiat nemo quas maxime?</p>
//                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, dolor. Odio eius illo esse qui facilis natus quibusdam vitae? Reprehenderit qui eum ducimus tenetur impedit dolore fugiat nemo quas maxime?</p>
//                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, dolor. Odio eius illo esse qui facilis natus quibusdam vitae? Reprehenderit qui eum ducimus tenetur impedit dolore fugiat nemo quas maxime?</p>
//                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, dolor. Odio eius illo esse qui facilis natus quibusdam vitae? Reprehenderit qui eum ducimus tenetur impedit dolore fugiat nemo quas maxime?</p>
//                     </div>

//                 </div>

//             </div>
//         </div>
//     );
// }

// export default Usuario;

// import React, { useEffect, useState } from 'react';
// import './Usuario.css';

// const Usuario = ({ theme }) => {
//     const [usuario, setUsuario] = useState(null);
//     const [erro, setErro] = useState('');

//     useEffect(() => {
//         const emailLogado = localStorage.getItem('emailLogado');

//         if (emailLogado) {
//             const dadosUsuario = JSON.parse(localStorage.getItem(emailLogado));
//             if (dadosUsuario) {
//                 setUsuario(dadosUsuario);
//             } else {
//                 setErro('Usuário não encontrado.');
//             }
//         } else {
//             setErro('Nenhum usuário logado.');
//         }
//     }, []);

//     const handleEditUser = () => {
//         alert('Implementar edição do usuário.');
//     };

//     const handleDeleteUser = () => {
//         if (usuario) {
//             localStorage.removeItem(usuario.email); // Remove os dados do usuário
//             localStorage.removeItem('emailLogado'); // Remove o email logado
//             alert('Usuário excluído com sucesso!');
//             setUsuario(null); 
//         }
//     };

//     return (
//         <div className='div-user'>
//             <div className='principal-user-div'>
//                 <div className='p-esquerda'>
//                     <div className="foto-usuario">
//                         <div className="foto">
//                         </div>
//                     </div>
//                     <div className="nome-usuario">
//                         <p>Olá {usuario ? usuario.nome : 'usuário'}</p>
//                     </div>
//                     <div className="input-usuario">
//                         <p>NOME</p>
//                         <input
//                             className='input-css'
//                             type='text'
//                             value={usuario ? usuario.nome : ''}
//                             placeholder='Nome do Usuário'
//                             readOnly
//                         />
//                         <p>E-MAIL</p>
//                         <input
//                             className='input-css'
//                             type='text'
//                             value={usuario ? usuario.email : ''}
//                             placeholder='********************'
//                             readOnly
//                         />
//                         <p>SENHA</p>
//                         <input
//                             className='input-css'
//                             type='password'
//                             value={usuario ? usuario.senha : ''}
//                             placeholder='*********'
//                             readOnly
//                         />
//                     </div>
//                     <div className="button-usuario">
//                         <button className='button-edituser-css' onClick={handleEditUser}>EDITAR USER</button>
//                         <button className='button-excluiruser-css' onClick={handleDeleteUser}>EXCLUIR USER</button>
//                     </div>
//                 </div>

//                 <div className='p-direita'>
//                     <p className='titulo-pedidos'>MEUS PEDIDOS</p>
//                     <div className='pedidos-usuario'>
//                         <p>{erro ? erro : 'Nenhum pedido encontrado.'}</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Usuario;


// import React, { useEffect, useState } from 'react';
// import './Usuario.css';

// const Usuario = ({ theme, pedidos }) => { // Recebendo 'pedidos' como prop
//     const [usuario, setUsuario] = useState(null);
//     const [erro, setErro] = useState('');

//     useEffect(() => {
//         const emailLogado = localStorage.getItem('emailLogado');

//         if (emailLogado) {
//             const dadosUsuario = JSON.parse(localStorage.getItem(emailLogado));
//             if (dadosUsuario) {
//                 setUsuario(dadosUsuario);
//             } else {
//                 setErro('Usuário não encontrado.');
//             }
//         } else {
//             setErro('Nenhum usuário logado.');
//         }
//     }, []);

//     const handleEditUser = () => {
//         alert('Implementar edição do usuário.');
//     };

//     const handleDeleteUser = () => {
//         if (usuario) {
//             localStorage.removeItem(usuario.email); // Remove os dados do usuário
//             localStorage.removeItem('emailLogado'); // Remove o email logado
//             alert('Usuário excluído com sucesso!');
//             setUsuario(null); 
//         }
//     };

//     return (
//         <div className='div-user'>
//             <div className='principal-user-div'>
//                 <div className='p-esquerda'>
//                     <div className="foto-usuario">
//                         <div className="foto">
//                         </div>
//                     </div>
//                     <div className="nome-usuario">
//                         <p>Olá {usuario ? usuario.nome : 'usuário'}</p>
//                     </div>
//                     <div className="input-usuario">
//                         <p>NOME</p>
//                         <input
//                             className='input-css'
//                             type='text'
//                             value={usuario ? usuario.nome : ''}
//                             placeholder='Nome do Usuário'
//                             readOnly
//                         />
//                         <p>E-MAIL</p>
//                         <input
//                             className='input-css'
//                             type='text'
//                             value={usuario ? usuario.email : ''}
//                             placeholder='********************'
//                             readOnly
//                         />
//                         <p>SENHA</p>
//                         <input
//                             className='input-css'
//                             type='password'
//                             value={usuario ? usuario.senha : ''}
//                             placeholder='*********'
//                             readOnly
//                         />
//                     </div>
//                     <div className="button-usuario">
//                         <button className='button-edituser-css' onClick={handleEditUser}>EDITAR USER</button>
//                         <button className='button-excluiruser-css' onClick={handleDeleteUser}>EXCLUIR USER</button>
//                     </div>
//                 </div>

//                 <div className='p-direita'>
//                     <p className='titulo-pedidos'>MEUS PEDIDOS</p>
//                     <div className='pedidos-usuario'>
//                         {pedidos.length > 0 ? (
//                             pedidos.map((pedido, index) => (
//                                 <p key={index}>{pedido.quantidade} {pedido.nome}(s)</p>
//                             ))
//                         ) : (
//                             <p>{erro ? erro : 'Nenhum pedido encontrado.'}</p>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Usuario;


// import React, { useEffect, useState } from 'react';
// import './Usuario.css';

// const Usuario = ({ theme, pedidos, removePedido }) => { // Adicione removePedido como prop
//     const [usuario, setUsuario] = useState(null);
//     const [erro, setErro] = useState('');

//     useEffect(() => {
//         const emailLogado = localStorage.getItem('emailLogado');

//         if (emailLogado) {
//             const dadosUsuario = JSON.parse(localStorage.getItem(emailLogado));
//             if (dadosUsuario) {
//                 setUsuario(dadosUsuario);
//             } else {
//                 setErro('Usuário não encontrado.');
//             }
//         } else {
//             setErro('Nenhum usuário logado.');
//         }
//     }, []);

//     const handleEditUser = () => {
//         alert('Implementar edição do usuário.');
//     };

//     const handleDeleteUser = () => {
//         if (usuario) {
//             localStorage.removeItem(usuario.email); // Remove os dados do usuário
//             localStorage.removeItem('emailLogado'); // Remove o email logado
//             alert('Usuário excluído com sucesso!');
//             setUsuario(null); 
//         }
//     };

//     const handleRemovePedido = (index) => {
//         removePedido(index); // Chama a função para remover o pedido
//     };

//     return (
//         <div className='div-user'>
//             <div className='principal-user-div'>
//                 <div className='p-esquerda'>
//                     <div className="foto-usuario">
//                         <div className="foto"></div>
//                     </div>
//                     <div className="nome-usuario">
//                         <p>Olá {usuario ? usuario.nome : 'usuário'}</p>
//                     </div>
//                     <div className="input-usuario">
//                         <p>NOME</p>
//                         <input
//                             className='input-css'
//                             type='text'
//                             value={usuario ? usuario.nome : ''}
//                             placeholder='Nome do Usuário'
//                             readOnly
//                         />
//                         <p>E-MAIL</p>
//                         <input
//                             className='input-css'
//                             type='text'
//                             value={usuario ? usuario.email : ''}
//                             placeholder='********************'
//                             readOnly
//                         />
//                         <p>SENHA</p>
//                         <input
//                             className='input-css'
//                             type='password'
//                             value={usuario ? usuario.senha : ''}
//                             placeholder='*********'
//                             readOnly
//                         />
//                     </div>
//                     <div className="button-usuario">
//                         <button className='button-edituser-css' onClick={handleEditUser}>EDITAR USER</button>
//                         <button className='button-excluiruser-css' onClick={handleDeleteUser}>EXCLUIR USER</button>
//                     </div>
//                 </div>

//                 <div className='p-direita'>
//                     <p className='titulo-pedidos'>MEUS PEDIDOS</p>
//                     <div className='pedidos-usuario'>
//                         {pedidos.length > 0 ? (
//                             pedidos.map((pedido, index) => (
//                                 <div key={index} className='pedido-card'>
//                                     <p>{pedido.quantidade} {pedido.nome}(s)</p>
//                                     <button onClick={() => handleRemovePedido(index)}>❌</button>
//                                 </div>
//                             ))
//                         ) : (
//                             <p>{erro ? erro : 'Nenhum pedido encontrado.'}</p>
//                         )}
//                     </div>
//                     <button className='button-edituser-css-dois'>FINALIZAR PEDIDO</button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Usuario;






// import React, { useEffect, useState } from 'react';
// import './Usuario.css';

// const Usuario = ({ theme, pedidos, removePedido }) => {
//     const [usuario, setUsuario] = useState(null);
//     const [erro, setErro] = useState('');
//     const [nome, setNome] = useState('');
//     const [email, setEmail] = useState('');
//     const [senha, setSenha] = useState('');

//     useEffect(() => {
//         const emailLogado = localStorage.getItem('emailLogado');

//         if (emailLogado) {
//             const dadosUsuario = JSON.parse(localStorage.getItem(emailLogado));
//             if (dadosUsuario) {
//                 setUsuario(dadosUsuario);
//                 setNome(dadosUsuario.nome);
//                 setEmail(dadosUsuario.email);
//                 setSenha(dadosUsuario.senha);
//             } else {
//                 setErro('Usuário não encontrado.');
//             }
//         } else {
//             setErro('Nenhum usuário logado.');
//         }
//     }, []);

//     const handleEditUser = () => {
//         if (usuario) {
//             const updatedUser = { ...usuario, nome, email, senha };
//             localStorage.setItem(email, JSON.stringify(updatedUser)); // Atualiza o usuário no localStorage
//             localStorage.setItem('emailLogado', email); // Atualiza o email logado se o email foi alterado
//             alert('Usuário editado com sucesso!');
//         }
//     };

//     const handleDeleteUser = () => {
//         if (usuario) {
//             localStorage.removeItem(usuario.email); // Remove os dados do usuário
//             localStorage.removeItem('emailLogado'); // Remove o email logado
//             alert('Usuário excluído com sucesso!');
//             setUsuario(null);
//             setNome('');
//             setEmail('');
//             setSenha('');
//         }
//     };

//     const handleRemovePedido = (index) => {
//         removePedido(index); // Chama a função para remover o pedido
//     };

//     const finalizarpedido = (index) =>{
//         alert('Pedido finalizado com sucesso!')
//     };

//     return (
//         <div className='div-user'>
//             <div className='principal-user-div'>
//                 <div className='p-esquerda'>
//                     <div className="foto-usuario">
//                         <div className="foto"></div>
//                     </div>
//                     <div className="nome-usuario">
//                         <p>Olá {usuario ? usuario.nome : 'usuário'}</p>
//                     </div>
//                     <div className="input-usuario">
//                         <p>NOME</p>
//                         <input
//                             className='input-css'
//                             type='text'
//                             value={nome}
//                             placeholder='Nome do Usuário'
//                             onChange={(e) => setNome(e.target.value)} // Atualiza o estado do nome
//                         />
//                         <p>E-MAIL</p>
//                         <input
//                             className='input-css'
//                             type='text'
//                             value={email}
//                             placeholder='E-mail do Usuário'
//                             onChange={(e) => setEmail(e.target.value)} // Atualiza o estado do e-mail
//                         />
//                         <p>SENHA</p>
//                         <input
//                             className='input-css'
//                             type='password'
//                             value={senha}
//                             placeholder='Senha do Usuário'
//                             onChange={(e) => setSenha(e.target.value)} // Atualiza o estado da senha
//                         />
//                     </div>
//                     <div className="button-usuario">
//                         <button className='button-edituser-css' onClick={handleEditUser}>EDITAR USER</button>
//                         <button className='button-excluiruser-css' onClick={handleDeleteUser}>EXCLUIR USER</button>
//                     </div>
//                 </div>

//                 <div className='p-direita'>
//                     <p className='titulo-pedidos'>MEUS PEDIDOS</p>
//                     <div className='pedidos-usuario'>
//                         {pedidos.length > 0 ? (
//                             pedidos.map((pedido, index) => (
//                                 <div key={index} className='pedido-card'>
//                                     <p>{pedido.quantidade} {pedido.nome}(s)</p>
//                                     <button onClick={() => handleRemovePedido(index)}>❌</button>
//                                 </div>
//                             ))
//                         ) : (
//                             <p>{erro ? erro : 'Nenhum pedido encontrado.'}</p>
//                         )}
//                     </div>
//                     <button onClick={finalizarpedido} className='button-edituser-css-dois'>FINALIZAR PEDIDO</button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Usuario;


// import React, { useEffect, useState } from 'react';
// import './Usuario.css';

// const Usuario = ({ theme, pedidos, removePedido, clearPedidos }) => {
//     const [usuario, setUsuario] = useState(null);
//     const [erro, setErro] = useState('');
//     const [nome, setNome] = useState('');
//     const [email, setEmail] = useState('');
//     const [senha, setSenha] = useState('');

//     useEffect(() => {
//         const emailLogado = localStorage.getItem('emailLogado');

//         if (emailLogado) {
//             const dadosUsuario = JSON.parse(localStorage.getItem(emailLogado));
//             if (dadosUsuario) {
//                 setUsuario(dadosUsuario);
//                 setNome(dadosUsuario.nome);
//                 setEmail(dadosUsuario.email);
//                 setSenha(dadosUsuario.senha);
//             } else {
//                 setErro('Usuário não encontrado.');
//             }
//         } else {
//             setErro('Nenhum usuário logado.');
//         }
//     }, []);

//     const handleEditUser = () => {
//         if (usuario) {
//             const updatedUser = { ...usuario, nome, email, senha };
//             localStorage.setItem(email, JSON.stringify(updatedUser)); // Atualiza o usuário no localStorage
//             localStorage.setItem('emailLogado', email); // Atualiza o email logado se o email foi alterado
//             alert('Usuário editado com sucesso!');
//         }
//     };

//     const handleDeleteUser = () => {
//         if (usuario) {
//             localStorage.removeItem(usuario.email); // Remove os dados do usuário
//             localStorage.removeItem('emailLogado'); // Remove o email logado
//             alert('Usuário excluído com sucesso!');
//             setUsuario(null);
//             setNome('');
//             setEmail('');
//             setSenha('');
//         }
//     };

//     const handleRemovePedido = (index) => {
//         removePedido(index); // Chama a função para remover o pedido
//     };

//     const finalizarPedido = () => {
//         clearPedidos(); // Limpa todos os pedidos
//         alert('Pedido finalizado com sucesso!');
//     };

//     return (
//         <div className='div-user'>
//             <div className='principal-user-div'>
//                 <div className='p-esquerda'>
//                     <div className="foto-usuario">
//                         <div className="foto"></div>
//                     </div>
//                     <div className="nome-usuario">
//                         <p>Olá {usuario ? usuario.nome : 'usuário'}</p>
//                     </div>
//                     <div className="input-usuario">
//                         <p>NOME</p>
//                         <input
//                             className='input-css'
//                             type='text'
//                             value={nome}
//                             placeholder='Nome do Usuário'
//                             onChange={(e) => setNome(e.target.value)} // Atualiza o estado do nome
//                         />
//                         <p>E-MAIL</p>
//                         <input
//                             className='input-css'
//                             type='text'
//                             value={email}
//                             placeholder='E-mail do Usuário'
//                             onChange={(e) => setEmail(e.target.value)} // Atualiza o estado do e-mail
//                         />
//                         <p>SENHA</p>
//                         <input
//                             className='input-css'
//                             type='password'
//                             value={senha}
//                             placeholder='Senha do Usuário'
//                             onChange={(e) => setSenha(e.target.value)} // Atualiza o estado da senha
//                         />
//                     </div>
//                     <div className="button-usuario">
//                         <button className='button-edituser-css' onClick={handleEditUser}>EDITAR USER</button>
//                         <button className='button-excluiruser-css' onClick={handleDeleteUser}>EXCLUIR USER</button>
//                     </div>
//                 </div>

//                 <div className='p-direita'>
//                     <p className='titulo-pedidos'>MEUS PEDIDOS</p>
//                     <div className='pedidos-usuario'>
//                         {pedidos.length > 0 ? (
//                             pedidos.map((pedido, index) => (
//                                 <div key={index} className='pedido-card'>
//                                     <p>{pedido.quantidade} {pedido.nome}(s)</p>
//                                     <button onClick={() => handleRemovePedido(index)}>❌</button>
//                                 </div>
//                             ))
//                         ) : (
//                             <p>{erro ? erro : 'Nenhum pedido encontrado.'}</p>
//                         )}
//                     </div>
//                     <button onClick={finalizarPedido} className='button-edituser-css-dois'>FINALIZAR PEDIDO</button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Usuario;


// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Usuario.css';

// const Usuario = ({ theme, pedidos, removePedido, clearPedidos }) => {
//     const navigate = useNavigate(); // Hook para navegação
//     const [usuario, setUsuario] = useState(null);
//     const [erro, setErro] = useState('');
//     const [nome, setNome] = useState('');
//     const [email, setEmail] = useState('');
//     const [senha, setSenha] = useState('');

//     useEffect(() => {
//         const emailLogado = localStorage.getItem('emailLogado');

//         if (emailLogado) {
//             const dadosUsuario = JSON.parse(localStorage.getItem(emailLogado));
//             if (dadosUsuario) {
//                 setUsuario(dadosUsuario);
//                 setNome(dadosUsuario.nome);
//                 setEmail(dadosUsuario.email);
//                 setSenha(dadosUsuario.senha);
//             } else {
//                 setErro('Usuário não encontrado.');
//             }
//         } else {
//             setErro('Nenhum usuário logado.');
//         }
//     }, []);

//     const handleEditUser = () => {
//         if (usuario) {
//             const updatedUser = { ...usuario, nome, email, senha };
//             localStorage.setItem(email, JSON.stringify(updatedUser));
//             localStorage.setItem('emailLogado', email);
//             alert('Usuário editado com sucesso!');
//         }
//     };

//     const handleDeleteUser = () => {
//         if (window.confirm('Você tem certeza que deseja excluir sua conta?')) {
//             if (usuario) {
//                 localStorage.removeItem(usuario.email); // Remove os dados do usuário
//                 localStorage.removeItem('emailLogado'); // Remove o email logado
//                 alert('Usuário excluído com sucesso!');
//                 setUsuario(null);
//                 setNome('');
//                 setEmail('');
//                 setSenha('');
//                 navigate('/'); // Redireciona para a Home
//             }
//         }
//     };

//     const handleRemovePedido = (index) => {
//         removePedido(index);
//     };

//     const finalizarPedido = () => {
//         clearPedidos(); // Limpa todos os pedidos
//         alert('Pedido finalizado com sucesso!');
//     };

//     return (
//         <div className='div-user'>
//             <div className='principal-user-div'>
//                 <div className='p-esquerda'>
//                     <div className="foto-usuario">
//                         <div className="foto"></div>
//                     </div>
//                     <div className="nome-usuario">
//                         <p>Olá {usuario ? usuario.nome : 'usuário'}</p>
//                     </div>
//                     <div className="input-usuario">
//                         <p>NOME</p>
//                         <input
//                             className='input-css'
//                             type='text'
//                             value={nome}
//                             placeholder='Nome do Usuário'
//                             onChange={(e) => setNome(e.target.value)}
//                         />
//                         <p>E-MAIL</p>
//                         <input
//                             className='input-css'
//                             type='text'
//                             value={email}
//                             placeholder='E-mail do Usuário'
//                             onChange={(e) => setEmail(e.target.value)}
//                         />
//                         <p>SENHA</p>
//                         <input
//                             className='input-css'
//                             type='password'
//                             value={senha}
//                             placeholder='Senha do Usuário'
//                             onChange={(e) => setSenha(e.target.value)}
//                         />
//                     </div>
//                     <div className="button-usuario">
//                         <button className='button-edituser-css' onClick={handleEditUser}>EDITAR USER</button>
//                         <button className='button-excluiruser-css' onClick={handleDeleteUser}>EXCLUIR USER</button>
//                     </div>
//                 </div>

//                 <div className='p-direita'>
//                     <p className='titulo-pedidos'>MEUS PEDIDOS</p>
//                     <div className='pedidos-usuario'>
//                         {pedidos.length > 0 ? (
//                             pedidos.map((pedido, index) => (
//                                 <div key={index} className='pedido-card'>
//                                     <p>{pedido.quantidade} {pedido.nome}(s)</p>
//                                     <button onClick={() => handleRemovePedido(index)}>❌</button>
//                                 </div>
//                             ))
//                         ) : (
//                             <p>{erro ? erro : 'Nenhum pedido encontrado.'}</p>
//                         )}
//                     </div>
//                     <button onClick={finalizarPedido} className='button-edituser-css-dois'>FINALIZAR PEDIDO</button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Usuario;

// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Usuario.css';

// const Usuario = ({ theme, pedidos, removePedido, clearPedidos, handleLogout }) => {
//     const [usuario, setUsuario] = useState(null);
//     const [erro, setErro] = useState('');
//     const [nome, setNome] = useState('');
//     const [email, setEmail] = useState('');
//     const [senha, setSenha] = useState('');
//     const navigate = useNavigate(); // Hook para navegação

//     useEffect(() => {
//         const emailLogado = localStorage.getItem('emailLogado');

//         if (emailLogado) {
//             const dadosUsuario = JSON.parse(localStorage.getItem(emailLogado));
//             if (dadosUsuario) {
//                 setUsuario(dadosUsuario);
//                 setNome(dadosUsuario.nome);
//                 setEmail(dadosUsuario.email);
//                 setSenha(dadosUsuario.senha);
//             } else {
//                 setErro('Usuário não encontrado.');
//             }
//         } else {
//             setErro('Nenhum usuário logado.');
//         }
//     }, []);

//     const handleEditUser = () => {
//         if (usuario) {
//             const updatedUser = { ...usuario, nome, email, senha };
//             localStorage.setItem(email, JSON.stringify(updatedUser));
//             localStorage.setItem('emailLogado', email);
//             alert('Usuário editado com sucesso!');
//         }
//     };

//     const handleDeleteUser = () => {
//         if (usuario) {
//             const confirmDelete = window.confirm('Tem certeza que deseja excluir sua conta?');
//             if (confirmDelete) {
//                 localStorage.removeItem(usuario.email);
//                 localStorage.removeItem('emailLogado');
//                 handleLogout(); // Desloga o usuário
//                 clearPedidos(); // Limpa os pedidos
//                 alert('Usuário excluído com sucesso!');
//                 navigate('/'); // Redireciona para a página inicial
//             }
//         }
//     };

//     const handleRemovePedido = (index) => {
//         removePedido(index);
//     };

//     const finalizarPedido = () => {
//         clearPedidos();
//         alert('Pedido finalizado com sucesso!');
//     };

//     return (
//         <div className='div-user'>
//             <div className='principal-user-div'>
//                 <div className='p-esquerda'>
//                     <div className="foto-usuario">
//                         <div className="foto"></div>
//                     </div>
//                     <div className="nome-usuario">
//                         <p>Olá {usuario ? usuario.nome : 'usuário'}</p>
//                     </div>
//                     <div className="input-usuario">
//                         <p>NOME</p>
//                         <input
//                             className='input-css'
//                             type='text'
//                             value={nome}
//                             placeholder='Nome do Usuário'
//                             onChange={(e) => setNome(e.target.value)}
//                         />
//                         <p>E-MAIL</p>
//                         <input
//                             className='input-css'
//                             type='text'
//                             value={email}
//                             placeholder='E-mail do Usuário'
//                             onChange={(e) => setEmail(e.target.value)}
//                         />
//                         <p>SENHA</p>
//                         <input
//                             className='input-css'
//                             type='password'
//                             value={senha}
//                             placeholder='Senha do Usuário'
//                             onChange={(e) => setSenha(e.target.value)}
//                         />
//                     </div>
//                     <div className="button-usuario">
//                         <button className='button-edituser-css' onClick={handleEditUser}>EDITAR USER</button>
//                         <button className='button-excluiruser-css' onClick={handleDeleteUser}>EXCLUIR USER</button>
//                     </div>
//                 </div>

//                 <div className='p-direita'>
//                     <p className='titulo-pedidos'>MEUS PEDIDOS</p>
//                     <div className='pedidos-usuario'>
//                         {pedidos.length > 0 ? (
//                             pedidos.map((pedido, index) => (
//                                 <div key={index} className='pedido-card'>
//                                     <p>{pedido.quantidade} {pedido.nome}(s)</p>
//                                     <button onClick={() => handleRemovePedido(index)}>❌</button>
//                                 </div>
//                             ))
//                         ) : (
//                             <p>{erro ? erro : 'Nenhum pedido encontrado.'}</p>
//                         )}
//                     </div>
//                     <button onClick={finalizarPedido} className='button-edituser-css-dois'>FINALIZAR PEDIDO</button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Usuario;


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
