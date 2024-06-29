import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Boton from './Boton'
import Nombre from './Nombre'
function App() {
  const [count, setCount] = useState(0)

  const [nombre,setNombre]=useState("")

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Boton count={count} setCount={setCount}/>
      {/* <Nombre nombre={nombre} setNombre={setNombre}/>
      <Nombre nombre={nombre} setNombre={setNombre}/>
      <Nombre nombre={nombre} setNombre={setNombre}/>
      <Nombre nombre={nombre} setNombre={setNombre}/> */}
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
