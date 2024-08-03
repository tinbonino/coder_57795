import { collection, getDocs,getFirestore,query,where } from "firebase/firestore";


function Query() {

    //conecto la base de datos

    const db=getFirestore();

    //creo la referencia a la collection

    const refItems=collection(db,"items");

    //genero la query (consulta)

    const q=query(refItems,where("price",">",5000));

    getDocs(q).then(snapshot=>{
        if(snapshot.size===0) {
            console.log("No hay resultados para la búsqueda");
        } else {
            console.log(snapshot.docs.map(prod=>console.log(prod.data())))
        }
    })


  return (
    <div>Haciendo una query</div>
  )
}

export default Query