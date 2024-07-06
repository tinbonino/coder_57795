import { useState, useEffect } from "react";

import { productos } from "../productos";
import "../styles.css"
function EjemploMapYPromise() {

    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(true);

    useEffect(() => {
        const traerProductos = () => {
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve(productos)
            },5000);
          });
        }

        traerProductos().then((resultados) => {
          setData(resultados);
          setLoading(false);
        })
    },[]);

    if(loading){
        return <div>Cargando...</div>
    }

    console.log(data);

  return (
    <div className="container">
        {data.map((prod) => (
            <div className="card" key={prod.id}>
                <h2>{prod.nombre}</h2>
                <p>{prod.descripcion}</p>
                <h2>{prod.precio}</h2>
            </div>
        ))}
    </div>
  )
}

export default EjemploMapYPromise