import {useContext} from "react";
import ThemeContext from "../context";


function Navbar() {

    const {tema, handleTema} = useContext(ThemeContext)

  return (
    <div>
        <button onClick={handleTema} style={{background:tema.background,color:tema.font}}>Cambiar tema</button>
    </div>
  )
}

export default Navbar