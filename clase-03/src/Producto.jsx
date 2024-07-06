
function Producto({nombre,descripcion,precio}) {
  return (
    <div className="card">
        <h2>{nombre}</h2>
        <h3>{descripcion}</h3>
        <p>{precio}</p>
    </div>
  )
}

export default Producto