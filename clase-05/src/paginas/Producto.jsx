import React from 'react'
import { Link } from 'react-router-dom'
function Producto({nombre,id,precio}) {
  return (
    // <div className='card'>
        <Link to={`/productos/${id}`} className='card'>
            <h2>{nombre}</h2>
            <h2>{precio}</h2>
        </Link>
    // </div>
  )
}

export default Producto