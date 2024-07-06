import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
// import NavbarBoot from './components/NavbarBoot/NavbarBoot'

function App() {
 

  return (
    <>
     <Navbar/>
     {/* <NavbarBoot/> */}
     <ItemListContainer greeting="Bienvenido a mi tienda"/>
    </>
  )
}

export default App
