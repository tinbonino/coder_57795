import { useState, useEffect } from 'react'

import {doc, getDoc,getFirestore} from "firebase/firestore";

import './App.css'

function App() {

  const [data,setData] = useState({});
  const db = getFirestore();

  // Creo la referencia al documento.

  useEffect(() => {
    const prodRef= doc(db,"items","C4H4cYKTnpbXMLNGpRCe");
  
    // Traigo la información
  
    getDoc(prodRef).then(snapshot=> {
      console.log(snapshot.data());
      setData(snapshot.data())})
    
  },[])

  return (
    <>
     <h2>{data.title}</h2>
     <h3>{data.price}</h3>
     <p>{data.description}</p>
    </>
  )
}

export default App
