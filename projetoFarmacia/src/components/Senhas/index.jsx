import React, { useState } from 'react';
import './index.css';

function Body() {
    const [fila, setFila] = useState([]);
    const [mensagem, setMensagem] = useState('');

    const adicionarSenha = (tipo) => {
        const numero = fila.length + 1;
        const novaSenha = { tipo, numero };
        setFila([...fila, novaSenha]);
        setMensagem(`Senha ${tipo} ${numero} adicionada!`);
    };

    const chamarSenha = () => {
        if (fila.length === 0) {
            setMensagem('Nenhuma senha na fila!');
            return;
        }

        const preferencial = fila.find(senha => senha.tipo === 'Preferencial');
        const senhaChamada = preferencial || fila[0];

        setFila(fila.filter(senha => senha !== senhaChamada));
        setMensagem(`Senha chamada: ${senhaChamada.tipo} ${senhaChamada.numero}`);
    };

    return (
        <div className='container-principal'>
            <h1>Sistema de Senhas - Farmácia</h1>
            <div className='area-botoes'>
                <button className='botao normal' onClick={() => adicionarSenha('Normal')}>Adicionar Senha Normal</button>
                <button className='botao preferencial' onClick={() => adicionarSenha('Preferencial')}>Adicionar Senha Preferencial</button>
                <button className='botao chamar' onClick={chamarSenha}>Chamar Senha</button>
            </div>
            <div className='area-fila'>
                <h2>Fila de Senhas:</h2>
                <table className='tabela-senhas'>
                    <thead>
                        <tr>
                            <th>Tipo</th>
                            <th>Número</th>
                        </tr>
                    </thead>
                    <tbody>
                        {fila.map((senha, index) => (
                            <tr key={index}>
                                <td>{senha.tipo}</td>
                                <td>{senha.numero}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {mensagem && <div className='mensagem-display'>{mensagem}</div>}
        </div>
    );
}

export default Body;
