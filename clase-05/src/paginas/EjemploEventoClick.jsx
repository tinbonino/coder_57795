import { useState } from "react"

function EjemploEventoClick() {

    const [info,setInfo] = useState("Click no realizado aun");

    const clickHandler = () => {
        setInfo("Click realizado");
        console.log(info)  // La primera vez no va a mostrar lo esperado porque la actualizacón de los estados es asincrónica.
    }

  return (
    <div>
        <button onClick={clickHandler}>Click!</button>
        <h2>{info}</h2>
    </div>
  )
}

export default EjemploEventoClick