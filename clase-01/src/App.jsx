import { useState } from 'react'
import Hijo from './Hijo'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Bienvenidos a la clase</h1>
     <Hijo nombre="Nicolas" edad="32"/>  // se guardan en un objeto que recibe como argumento la función
     <Hijo nombre="Nahuel" edad="28"/>
     <Hijo/>
     <Hijo nombre="Lara" edad="25"/>
     <Hijo nombre="Cata" edad="25"/>

    </>
  )
}

export default App
