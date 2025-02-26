import { useState } from 'react'
import { Peticiones } from './Componentes/Peticiones.jsx'
import './App.css'
import { Condicion } from './Componentes/Condicion.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Peticiones  />
     <Condicion edad={18} />

    </>
  )
}

export default App
