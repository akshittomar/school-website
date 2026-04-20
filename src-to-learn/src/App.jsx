import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Background from './components/Background'
import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{overflow:"hidden"}}>
    <Navbar></Navbar>
    
      <Background>
        

      </Background>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      
    </div>
  )
}

export default App
