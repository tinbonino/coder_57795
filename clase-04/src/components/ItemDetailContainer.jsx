import { useEffect,useState } from "react";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
    const [itemInfo,setItemInfo]=useState(null);
    const [texto,setTexto]=useState("");

    console.log("Componente renderizado")
    useEffect(() => {
      fetch("https://fakestoreapi.com/products/10")
        .then(response=>{
            console.log(response)
            if(!response.ok){
                throw new Error("No pudimos traer la info");
            }
            return response.json();
        })
        .then(data=>{
            console.log(data)
            setItemInfo(data)})
        .catch(error=>console.error("Se pudrió todo:",error));
    },[])
  return (
    <>
        <h2>Detalle del producto</h2>
        {itemInfo && <ItemDetail item={itemInfo}/>}
        <button onClick={()=>setTexto("Hola")}>Cambiar estado</button>
    </>
  )
}

export default ItemDetailContainer