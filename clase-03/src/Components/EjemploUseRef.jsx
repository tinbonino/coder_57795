import { useState, useRef } from "react"



function EjemploUseRef() {
    const [count,setCount]=useState(0);
    const renderCount=useRef(0)

    renderCount.current++
  return (
    <div>
        <p>contador: {count}</p>
        <button onClick={() => setCount(count=>count+1)}>Incrementar</button>
        <button onClick={() => setCount(count=>count+5)}>+ 5</button>
        <button onClick={() => setCount(count=>count-1)}>Restar</button>
        <p>Esta es la cantidad de veces que se renderizó el componente {renderCount.current}</p>
        
    </div>
  )
}

export default EjemploUseRef