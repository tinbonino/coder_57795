import React from 'react'

function Boton({count,setCount}) {
  return (
    <div className="card">
        <button onClick={() => setCount((prevState) => prevState + 1)}>   
            {/* Esta es la forma mas eficiente porque carga el último valor almacenado del estado */}
            count is {count}
        </button>
        <button onClick={() => setCount(() => count + 1)}>
          count is {count}
        </button>
       
    </div>
  )
}

export default Boton