
import './App.css'
import Navbar from "./components/Navbar/index"
import Body from "./components/Body/index"
import { useState } from 'react'

function App() {

  const [theme, setTheme] = useState('light');

  return (
    <>
      <div className={`container ${theme}`}>
        <Navbar  theme={theme} setTheme={setTheme}/>
        <Body />
      </div>
    </>
  )
}

export default App
