import { addDoc, collection, getFirestore } from "firebase/firestore";


function Agregar() {

    const item = {
        categoryId: "comida",
        description:"Hamburguesa de carne con jamón y queso",
        imageId:"hambu.jpg",
        price: 7000,
        title:"Hamburguesa JyQ"
    }

    const db = getFirestore();

    const itemsCollection=collection(db,"items");

    addDoc(itemsCollection,item).then(({id}) => {
        console.log(id);
        console.log("Item agregado correctamente");
      
    })


  return (
    <div>Agregando un elemento</div>
  )
}

export default Agregar