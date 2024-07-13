import React from 'react'
import { useState } from 'react'
function DogApi() {

    const [dogImageUrl,setDogImageUrl] = useState("");
    
    const fetchDogImage=() => {
      fetch("https://dog.ceo/api/breeds/image/random")   //Retorna una promesa
      .then(response=>{
        console.log(response)
        if(!response.ok){
            throw new Error("No pudimos traer la imagen");
        }
        return response.json();   //Retorna una promesa
      })
      .then(data=>{
        console.log(data);
        setDogImageUrl(data.message);
      })
      .catch(error=> console.error("Error haciendo el fetch",error))
    }

  return (
    <div>
        <h1>Imagen de perro</h1>
        <button onClick={fetchDogImage}>Ver perro</button>
        {dogImageUrl && <img src={dogImageUrl}/>}
        {/*   true   AND       true
                    false             }*/}
    </div>
  )
}

export default DogApi