import {useState} from "react";

function Renderizado() {

    const [mostrar,setMostrar]=useState(false);

    const handleClick = () => {
      setMostrar(!mostrar);
    }


    // Renderizado condicional con if

    const renderizarConIf = () => {
      if(mostrar){
        return <p>Este texto se muestra si el estado es true con IF</p>
      }
      return <p>Esta texto se muestra si el estado es false con IF</p>
    }

  return (
    <div>
        <button onClick={handleClick}>
        {mostrar? "Ocultar":"Mostrar"}
        </button>
        {/* Renderizando con ternario */}
        {mostrar ? <p>Este texto se muestra si el estado es true con ternario</p>
                 :<p>Este texto se muestra si el estado el false con ternario</p>}

        {/* Renderizando con el operador && */}

        {mostrar && <p>Este texto se muestra si el estado es true con operador &&</p>}

        {/* Renderizando con un if en el render */}

        {(() => {
            if (mostrar) {
                return <p>Este texto se muestra si el estado es true con una funcion en el render</p>
            }
            return <p>Esta texto se muestra si el estado es false con una funcion en el render</p>
        })()}

        {renderizarConIf()}
    </div>
  )
}

export default Renderizado