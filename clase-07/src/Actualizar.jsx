import { doc, getFirestore, updateDoc } from "firebase/firestore";


function Actualizar() {

    const db= getFirestore();

    const itemDoc = doc(db, "items","uQGaNy7wQZmqwrLWFVVW");

    updateDoc(itemDoc,{price:90000});

    console.log("Item actualizado correctamente")

  return (
    <div>Actualizando un item</div>
  )
}

export default Actualizar