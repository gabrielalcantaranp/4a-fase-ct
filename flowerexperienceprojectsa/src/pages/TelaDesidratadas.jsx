// import React, { useState } from 'react';
// import './TelaDesidratadas.css';
// import des_um from '../assets/des-um.png';
// import des_dois from '../assets/des-dois.png';
// import des_tres from '../assets/des-tres.png';
// import des_qua from '../assets/des-qua.png';
// import des_cin from '../assets/des-cin.png';

// const TelaDesidratadas = ({theme, setTheme}) => {
//     // Estado para controlar a visibilidade do card
//     const [showCard, setShowCard] = useState(false);

//     // Função que alterna a visibilidade do card
//     const handleToggleCard = () => {
//         setShowCard(!showCard);
//     };

//     return (
//         <div className='tela-desidratadas'>
//             <div className='ta-principal-desidratadas'>
//                 <div className='ta-esquerda-desidratadas'>
//                     <div className='ta-previas-desidratadas'>
//                         <img src={des_um} className='img-previas-desidratadas' alt="Arranjo 1" />
//                         <img src={des_dois} className='img-previas-desidratadas' alt="Arranjo 2" />
//                         <img src={des_tres} className='img-previas-desidratadas' alt="Arranjo 3" />
//                         <img src={des_qua} className='img-previas-desidratadas' alt="Arranjo 4" />
//                         <img src={des_cin} className='img-previas-desidratadas' alt="Arranjo 5" />
//                     </div>
//                     <img src={des_um} className='img-um-previas-desidratadas' alt="Arranjo grande" />
//                 </div>

//                 <div className='ta-direita-desidratadas'>
//                     <div className='ta-titulo-desidratadas'>
//                         <p className='ta-titulo-p-desidratadas'>DESIDRATADAS</p>
//                     </div>

//                     <div className='ta-estrelas-desidratadas'>
//                         <p className='ta-estrelas-p-desidratadas'>⭐⭐⭐⭐⭐</p>
//                     </div>

//                     <div className='ta-infos-desidratadas'>
//                         <div className='ta-infos-box-desidratadas'>
//                             <p className='ta-infos-p-desidratadas'>
//                                 Experimente transformar o seu lar com estilosas e impactantes Desidratadas.<br/><br/>
//                                 Tamanho: 80cm de altura por 70 cm de largura.<br/>
//                                 Vasos: Papelão colorido, Vasos de polietileno ou vidro.<br/>
//                                 Renovação: À cada 7 ou 15 dias.
//                             </p>
//                         </div>
//                     </div>

//                     <div className='ta-entrega-desidratadas'>
//                         <p className='ta-entrega-p-titulo-desidratadas'>ENTREGAS PARA O MESMO DIA</p>
//                         <p className='ta-entrega-p-text-desidratadas'>
//                             Para que a entrega seja feita no mesmo dia, o pedido deve ser realizado até às 15h00
//                         </p>
//                     </div>

//                     <div className='ta-button-addpedido-desidratadas'>
//                         <input type='number' className='inpt-number-desidratadas' placeholder="1" />
//                         <button className='btn-addpedido-desidratadas'>ADICIONAR AO PEDIDO</button>
//                     </div>

//                 </div>
//             </div>

//             <div className='btn-saiba-mais-desidratadas'>
//                 <button className='btn-saiba-mais-css-desidratadas' onClick={handleToggleCard}>COMO FUNCIONA</button>
//             </div>

//             {/* O card que aparece e desaparece ao clicar no botão */}
//             {showCard && (
//                 <div className='como-funciona-card-desidratadas'>
                
//                     <button className='btn-fechar-desidratadas' onClick={handleToggleCard}>FECHAR</button>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default TelaDesidratadas;


// import React, { useState } from 'react';
// import './TelaDesidratadas.css';
// import des_um from '../assets/des-um.png';
// import des_dois from '../assets/des-dois.png';
// import des_tres from '../assets/des-tres.png';
// import des_qua from '../assets/des-qua.png';
// import des_cin from '../assets/des-cin.png';

// const TelaDesidratadas = ({ theme, setTheme, addPedido }) => {
//     const [showCard, setShowCard] = useState(false);
//     const [quantidade, setQuantidade] = useState(1); // Estado para a quantidade

//     const handleToggleCard = () => {
//         setShowCard(!showCard);
//     };

//     const handleAddToPedido = () => {
//         if (quantidade > 0) {
//             addPedido({ nome: 'Desidratada', quantidade }); // Adiciona a desidratada ao pedido
//             alert(`Adicionado ${quantidade} desidratada(s) ao pedido!`); // Alerta de confirmação
//             setQuantidade(1); // Reseta a quantidade para 1 após adicionar
//         }
//     };

//     return (
//         <div className='tela-desidratadas'>
//             <div className='ta-principal-desidratadas'>
//                 <div className='ta-esquerda-desidratadas'>
//                     <div className='ta-previas-desidratadas'>
//                         <img src={des_um} className='img-previas-desidratadas' alt="Desidratada 1" />
//                         <img src={des_dois} className='img-previas-desidratadas' alt="Desidratada 2" />
//                         <img src={des_tres} className='img-previas-desidratadas' alt="Desidratada 3" />
//                         <img src={des_qua} className='img-previas-desidratadas' alt="Desidratada 4" />
//                         <img src={des_cin} className='img-previas-desidratadas' alt="Desidratada 5" />
//                     </div>
//                     <img src={des_um} className='img-um-previas-desidratadas' alt="Desidratada grande" />
//                 </div>

//                 <div className='ta-direita-desidratadas'>
//                     <div className='ta-titulo-desidratadas'>
//                         <p className='ta-titulo-p-desidratadas'>DESIDRATADAS</p>
//                     </div>

//                     <div className='ta-estrelas-desidratadas'>
//                         <p className='ta-estrelas-p-desidratadas'>⭐⭐⭐⭐⭐</p>
//                     </div>

//                     <div className='ta-infos-desidratadas'>
//                         <div className='ta-infos-box-desidratadas'>
//                             <p className='ta-infos-p-desidratadas'>
//                                 Experimente transformar o seu lar com estilosas e impactantes Desidratadas.<br/><br/>
//                                 Tamanho: 80cm de altura por 70 cm de largura.<br/>
//                                 Vasos: Papelão colorido, Vasos de polietileno ou vidro.<br/>
//                                 Renovação: À cada 7 ou 15 dias.
//                             </p>
//                         </div>
//                     </div>

//                     <div className='ta-entrega-desidratadas'>
//                         <p className='ta-entrega-p-titulo-desidratadas'>ENTREGAS PARA O MESMO DIA</p>
//                         <p className='ta-entrega-p-text-desidratadas'>
//                             Para que a entrega seja feita no mesmo dia, o pedido deve ser realizado até às 15h00
//                         </p>
//                     </div>

//                     <div className='ta-button-addpedido-desidratadas'>
//                         <input 
//                             type='number' 
//                             className='inpt-number-desidratadas' 
//                             value={quantidade} 
//                             onChange={(e) => setQuantidade(e.target.value)} 
//                             min="1" 
//                         />
//                         <button 
//                             className='btn-addpedido-desidratadas' 
//                             onClick={handleAddToPedido}
//                         >
//                             ADICIONAR AO PEDIDO
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             <div className='btn-saiba-mais-desidratadas'>
//                 <button className='btn-saiba-mais-css-desidratadas' onClick={handleToggleCard}>
//                     COMO FUNCIONA
//                 </button>
//             </div>

//             {showCard && (
//                 <div className='como-funciona-card-desidratadas'>
//                     <button className='btn-fechar-desidratadas' onClick={handleToggleCard}>FECHAR</button>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default TelaDesidratadas;


import React, { useState } from 'react';
import './TelaDesidratadas.css';
import des_um from '../assets/des-um.png';
import des_dois from '../assets/des-dois.png';
import des_tres from '../assets/des-tres.png';
import des_qua from '../assets/des-qua.png';
import des_cin from '../assets/des-cin.png';

const TelaDesidratadas = ({ theme, setTheme, addPedido, isLoggedIn }) => {
    const [showCard, setShowCard] = useState(false);
    const [quantidade, setQuantidade] = useState(1); // Estado para a quantidade

    const handleToggleCard = () => {
        setShowCard(!showCard);
    };

    const handleAddToPedido = () => {
        if (!isLoggedIn) {
            alert('Você não está logado. Faça login para adicionar pedidos!');
            return; // Impede a adição do pedido se o usuário não estiver logado
        }

        if (quantidade > 0) {
            addPedido({ nome: 'Desidratada', quantidade }); // Adiciona a desidratada ao pedido
            alert(`Adicionado ${quantidade} desidratada(s) ao pedido!`); // Alerta de confirmação
            setQuantidade(1); // Reseta a quantidade para 1 após adicionar
        } else {
            alert('Quantidade inválida. Por favor, insira um número maior que 0.'); // Validação da quantidade
        }
    };

    return (
        <div className='tela-desidratadas'>
            <div className='ta-principal-desidratadas'>
                <div className='ta-esquerda-desidratadas'>
                    <div className='ta-previas-desidratadas'>
                        <img src={des_um} className='img-previas-desidratadas' alt="Desidratada 1" />
                        <img src={des_dois} className='img-previas-desidratadas' alt="Desidratada 2" />
                        <img src={des_tres} className='img-previas-desidratadas' alt="Desidratada 3" />
                        <img src={des_qua} className='img-previas-desidratadas' alt="Desidratada 4" />
                        <img src={des_cin} className='img-previas-desidratadas' alt="Desidratada 5" />
                    </div>
                    <img src={des_um} className='img-um-previas-desidratadas' alt="Desidratada grande" />
                </div>

                <div className='ta-direita-desidratadas'>
                    <div className='ta-titulo-desidratadas'>
                        <p className='ta-titulo-p-desidratadas'>DESIDRATADAS</p>
                    </div>

                    <div className='ta-estrelas-desidratadas'>
                        <p className='ta-estrelas-p-desidratadas'>⭐⭐⭐⭐⭐</p>
                    </div>

                    <div className='ta-infos-desidratadas'>
                        <div className='ta-infos-box-desidratadas'>
                            <p className='ta-infos-p-desidratadas'>
                                Experimente transformar o seu lar com estilosas e impactantes Desidratadas.<br/><br/>
                                Tamanho: 80cm de altura por 70 cm de largura.<br/>
                                Vasos: Papelão colorido, Vasos de polietileno ou vidro.<br/>
                                Renovação: À cada 7 ou 15 dias.
                            </p>
                        </div>
                    </div>

                    <div className='ta-entrega-desidratadas'>
                        <p className='ta-entrega-p-titulo-desidratadas'>ENTREGAS PARA O MESMO DIA</p>
                        <p className='ta-entrega-p-text-desidratadas'>
                            Para que a entrega seja feita no mesmo dia, o pedido deve ser realizado até às 15h00
                        </p>
                    </div>

                    <div className='ta-button-addpedido-desidratadas'>
                        <input 
                            type='number' 
                            className='inpt-number-desidratadas' 
                            value={quantidade} 
                            onChange={(e) => setQuantidade(Number(e.target.value))} 
                            min="1" 
                        />
                        <button 
                            className='btn-addpedido-desidratadas' 
                            onClick={handleAddToPedido}
                        >
                            ADICIONAR AO PEDIDO
                        </button>
                    </div>
                </div>
            </div>

            <div className='btn-saiba-mais-desidratadas'>
                <button className='btn-saiba-mais-css-desidratadas' onClick={handleToggleCard}>
                    COMO FUNCIONA
                </button>
            </div>

            {showCard && (
                <div className='como-funciona-card-desidratadas'>
                    <button className='btn-fechar-desidratadas' onClick={handleToggleCard}>FECHAR</button>
                </div>
            )}
        </div>
    );
}

export default TelaDesidratadas;
