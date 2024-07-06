

function Nombre({nombre,setNombre}) {
  return (
    <div>
        <button onClick={() => setNombre("Ezequiel")}>Cambiar a Ezequiel</button>
        <h2>Su nombre ahora es: {nombre}</h2>
    </div>
  )
}

export default Nombre