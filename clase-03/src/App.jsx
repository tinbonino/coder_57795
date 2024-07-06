import { useState } from 'react'
import Productos from './Productos'
import Producto from './Producto'
import EjemploUseRef from './Components/EjemploUseRef'
import EjemploSimpleUseEffect from './Components/EjemploSimpleUseEffect'
import EjemploUseEffect from './Components/EjemploUseEffect'
import EjemploMapYPromise from './Components/EjemploMapYPromise'
// import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     {/* <Productos>
        <Producto nombre="TV" descripcion="40''" precio="580000"/>
        <Producto nombre="TV" descripcion="40''" precio="580000"/>
        <h2>Vengo a romper todo</h2>
        <Producto nombre="TV" descripcion="40''" precio="580000"/>
        <Producto nombre="TV" descripcion="40''" precio="580000"/>
     </Productos> */}
    {/* <EjemploUseRef/> */}
    {/* <EjemploSimpleUseEffect/> */}
    {/* <EjemploUseEffect/> */}
    <EjemploMapYPromise/>
    </>
  )
}

export default App
