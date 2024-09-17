import { useContext } from 'react'
import Navbar from '../components/Navbar'
import { GlobalContext } from '../contexts/GlobalContext'

function Home() {
  const { usuarioLogado, usuarios, setUsuarios } = useContext(GlobalContext)

  function adicionarUsuario() {
      let usuario ={
        id: Date.now(),
        nome: "Capitão Ganso",
        email: "capitão@juliaroger.com.br"
      }
      setUsuarios([...usuarios,usuario])
  }

  return (
    <div>
      <Navbar />
      <h1>Home page do site</h1>
      <p>
        {usuarioLogado}
      </p>

      <div>
        {
          usuarios.map((usuario) => (

            <div key={usuario.id}>
              <p>Nome: {usuario.nome}</p>
              <p>E-mail: {usuario.email}</p>
              <p>{usuario.id}</p>

            </div>

          ))
        }
      </div>

      <div>
        <button onClick={adicionarUsuario}>Adicionar usuário</button>
      </div>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis neque exercitationem veniam quod laborum placeat, dolores illo explicabo accusantium itaque tempora molestias excepturi impedit assumenda voluptatum, tenetur est dolor quo.</p>
    </div>

  )
}

export default Home
