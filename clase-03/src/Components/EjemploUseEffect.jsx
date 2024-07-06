import { useState, useEffect } from "react"

function EjemploUseEffect() {
    const [laps,setLaps]=useState(0);
    const [timeInSeconds, setTimeInSeconds] =useState(0);

    console.log("se monta el componente")
    useEffect(() => {
        setTimeInSeconds(0);
        const intervalId=setInterval(() => {
          setTimeInSeconds(time=>time+1)
        },1000);
        return () => {   //se desmonta el componente (se va para volver a ejecutarse)
          clearInterval(intervalId);
          console.log("se desmonta el componente")
        }
      
    },[laps])

    // useEffect(() => {
    //   console.log("se actualizo time")
    // },[timeInSeconds])

  return (
    <div>
        <p>Vueltas: {laps}</p>
        <p>Tiempo en segundos: {timeInSeconds}</p>
        <button onClick={() => setLaps(laps=>laps+1)}>Finalizar vuelta</button>
    </div>
  )
}

export default EjemploUseEffect

// Que pasa al clickear "finalizar vuelta"

//1 - Se actualiza el estado laps
//2 - Entonces, se vuelve a renderizar el componente
//3 - Por ello se desmonta y se vuelve a montar
//4 - En la acción de desmontaje limpiamos el intervalo.
//5 - Todo vuelve a comenzar de 0. 