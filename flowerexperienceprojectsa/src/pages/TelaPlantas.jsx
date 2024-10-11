import React, { useState } from 'react';
import './TelaPlantas.css';
import planta_um from '../assets/planta-um.png';
import planta_dois from '../assets/planta-dois.png';
import planta_tre from '../assets/planta-tre.png';
import planta_qua from '../assets/planta-qua.png';
import planta_cin from '../assets/planta-cin.png';

const TelaPlantas = ({ theme, setTheme, addPedido, isLoggedIn }) => {
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
            addPedido({ nome: 'Planta', quantidade }); // Adiciona a planta ao pedido
            alert(`Adicionado ${quantidade} planta(s) ao pedido!`); // Alerta de confirmação
            setQuantidade(1); // Reseta a quantidade para 1 após adicionar
        } else {
            alert('Quantidade inválida. Por favor, insira um número maior que 0.'); // Validação da quantidade
        }
    };

    return (
        <div className='tela-plantas'>
            <div className='ta-principal-plantas'>
                <div className='ta-esquerda-plantas'>
                    <div className='ta-previas-plantas'>
                        <img src={planta_um} className='img-previas-plantas' alt="Planta 1" />
                        <img src={planta_dois} className='img-previas-plantas' alt="Planta 2" />
                        <img src={planta_tre} className='img-previas-plantas' alt="Planta 3" />
                        <img src={planta_qua} className='img-previas-plantas' alt="Planta 4" />
                        <img src={planta_cin} className='img-previas-plantas' alt="Planta 5" />
                    </div>
                    <img src={planta_um} className='img-um-previas-plantas' alt="Planta grande" />
                </div>

                <div className='ta-direita-plantas'>
                    <div className='ta-titulo-plantas'>
                        <p className='ta-titulo-p-plantas'>PLANTAS</p>
                    </div>

                    <div className='ta-estrelas-plantas'>
                        <p className='ta-estrelas-p-plantas'>⭐⭐⭐⭐⭐</p>
                    </div>

                    <div className='ta-infos-plantas'>
                        <div className='ta-infos-box-plantas'>
                            <p className='ta-infos-p-plantas'>
                                Experimente transformar o seu lar com estilosas e impactantes plantas.<br/><br/>
                                Tamanho: 1m de altura por 70 cm de largura.<br/>
                                Vasos: Polietileno nas cores, mármore, cimento e areia.<br/>
                                Tempo de Permanência: 7 dias
                            </p>
                        </div>
                    </div>

                    <div className='ta-entrega-plantas'>
                        <p className='ta-entrega-p-titulo-plantas'>ENTREGAS PARA O MESMO DIA</p>
                        <p className='ta-entrega-p-text-plantas'>
                            Para que a entrega seja feita no mesmo dia, o pedido deve ser realizado até às 15h00
                        </p>
                    </div>

                    <div className='ta-button-addpedido-plantas'>
                        <input 
                            type='number' 
                            className='inpt-number-plantas' 
                            value={quantidade} 
                            onChange={(e) => setQuantidade(Number(e.target.value))} 
                            min="1" 
                        />
                        <button 
                            className='btn-addpedido-plantas' 
                            onClick={handleAddToPedido}
                        >
                            ADICIONAR AO PEDIDO
                        </button>
                    </div>

                </div>
            </div>

            <div className='btn-saiba-mais-plantas'>
                <button className='btn-saiba-mais-css-plantas' onClick={handleToggleCard}>COMO FUNCIONA</button>
            </div>

            {showCard && (
                <div className='como-funciona-card-plantas'>
                    <button className='btn-fechar-plantas' onClick={handleToggleCard}>FECHAR</button>
                </div>
            )}
        </div>
    );
}

export default TelaPlantas;
