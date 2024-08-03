import { getFirestore, writeBatch,doc } from "firebase/firestore";


function Batch() {

    const db=getFirestore();

    const batch= writeBatch(db);

    const itemRef1=doc(db,"items","C4H4cYKTnpbXMLNGpRCe");
    const itemRef2=doc(db,"items","uQGaNy7wQZmqwrLWFVVW");

    batch.update(itemRef1, {category:"Comidas Rápidas"});
    batch.update(itemRef2, {category:"Comidas Rápidas"});

    batch.commit()

    console.log("Batch implementado")
  return (
    <div>Hacemos modificación por lote</div>
  )
}

export default Batch