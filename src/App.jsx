import { useState } from 'react'
import './App.css'
import Plataforma from './componentes/Plataforma';

function App() {
  const [usuario, setUsuario] = useState(null);


  return (
    <>
      <h1>Bienvenido a Gualapop</h1>
      <Plataforma usuario={usuario} setUsuario={setUsuario} ></Plataforma>
    </>
  )
}

export default App
