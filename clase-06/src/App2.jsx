import {useReducer, useState} from "react";

import "./App.css";


function App2() {

    // const initialState="steelblue";

    const reducer = (state,action) => {
        switch(action.type){
            case "crimson":
                return "crimson";
            case "verde":
                return "#2a9d8f";
            case "azul":
                return "#0081a7";
            case "amarillo":
                return "yellow";
            default:
                return state;
        }
    }

    
    const [color,setColor] = useState("verde");

    const [state,dispatch] = useReducer(reducer,"steelblue");

  return (
    <div>
        <h2 style={{color:state}}>Soy un título que cambia de color</h2>
        <button onClick={()=> dispatch({type:"crimson"})}>Crimson</button>
        <button onClick={()=> dispatch({type:"verde"})}>Verde</button>
        <button onClick={()=> dispatch({type:"azul"})}>Azul</button>
        <button onClick={()=> dispatch({type:"amarillo"})}>Amarillo</button>
    </div>
  )
}

export default App2