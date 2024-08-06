import React from 'react'
import './Conteudo.css'
import {Duck} from './Duck'

function Conteudo() {
  return (
    <div className='conteudo-container'>
      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ipsam ipsum iusto repellat et doloribus enim laboriosam reiciendis doloremque laborum dignissimos sint nam rem, ipsa tempore voluptas neque fuga natus.</p>
      <img className='imagem-conteudo' src="./images/kanyegif.gif" alt="imagem do Kanye com CSS"/>
      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ipsam ipsum iusto repellat et doloribus enim laboriosam reiciendis doloremque laborum dignissimos sint nam rem, ipsa tempore voluptas neque fuga natus.</p>
      <Duck />
    </div>
  )
}

export default Conteudo
