
import './App.css'
import {useState} from 'react';
import React from 'react';

function App() {
  const [inputNome, setInputNome] = useState('');
  const [inputIdade, setInputIdade] = useState(0);
  const [usuarios, setUsuarios] = useState([]);

  function mudouNome(event){
    setInputNome(event.target.value)
  }

  function mudouIdade(event){
    setInputIdade(event.target.value)
  }

  function cadastrarUsuario(){
    let usuario = {
      id: Date.now(),
      nome: inputNome,
      idade: inputIdade
    }
    console.log(usuario);
    setUsuarios([...usuarios,usuario])

    setInputNome('')
    setInputIdade('')
  }

  return (
    <>
  <h1>Inputs Controlados</h1>

  <div className="divNome">
    <label htmlFor=''>Nome: </label>
    <input
      value={inputNome}
      onChange={mudouNome}
    id='inpNome' type='text' />
  </div>

  <div className="divNome">
    <label htmlFor='InpIdade'>Idade: </label>
    <input
    value={inputIdade}
    onChange={mudouIdade}
    type="number" id='inpIdade' />
  </div>

  <button onClick={cadastrarUsuario}>Cadastrar</button>

  <div>
  <p>
  Nome digitado: {inputNome}
  </p>

  <p>
  Idade Digitada: {inputIdade}  
  </p>  


  <p>
    <h2>Usuários</h2>
    <div className='usuarios'>
       {usuarios.map((usuario)=>(
        <div key={usuario.id} className='usuarios-container'>        
          <p>{usuario.nome} </p>
          <p>{usuario.idade}</p>
        </div>
      ))}
    </div>

  </p>
  </div>





    </>
  )
}

export default App
