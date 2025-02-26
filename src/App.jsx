import { useState } from 'react'
import { Peticiones } from './Componentes/Peticiones.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Peticiones  />
    </>
  )
}

export default App
