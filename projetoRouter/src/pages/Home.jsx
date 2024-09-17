import { useContext } from 'react'
import Navbar from '../components/Navbar'
import { GlobalContext } from '../contexts/GlobalContext'

function Home() {
  const {usuarioLogado} = useContext(GlobalContext)
  return (
    <div>     
      <Navbar />
      <h1>Home page do site</h1>
      {usuarioLogado}
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, sit adipisci? Reiciendis non sint placeat? Optio, recusandae quaerat. Velit esse non reiciendis facilis voluptates fugit ipsam nobis facere architecto cum.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, sit adipisci? Reiciendis non sint placeat? Optio, recusandae quaerat. Velit esse non reiciendis facilis voluptates fugit ipsam nobis facere architecto cum.</p>

    </div>
  )
}

export default Home
