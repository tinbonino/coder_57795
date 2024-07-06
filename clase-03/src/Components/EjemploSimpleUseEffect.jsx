import { useState, useEffect } from "react"

function EjemploSimpleUseEffect() {
    const [count,setCount] = useState(0);
    const [titulo, setTitulo] = useState("");

    //Se renderiza solo en el montaje del componente (la primera vez)

    useEffect(() => {
        console.log("Montaje del componente - primer render - Bienvenido ")
    },[])

    //Se actualiza count
    useEffect(() => {
        console.log("Se actualizó el valor de count");
    },[count])

    //Se actualiza titulo

    useEffect(() => {
      console.log("Se actualizó título");
    },[titulo])

    //Se renderizó el componente

    useEffect(() => {
      console.log("Se renderizó el componente");
    })

  return (
    <div>
        <h2>{titulo}</h2>
        <p>Contador: {count}</p>
        <button onClick={() =>setCount(count=>count+1)}>incrementar contador</button>
        <button onClick={() =>setTitulo("Bienvenidos a la clase 3")}>Implementar título</button>
    </div>
  )
}

export default EjemploSimpleUseEffect