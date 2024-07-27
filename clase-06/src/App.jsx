import { useState } from 'react'

import Navbar from './components/Navbar'
import Layout from './components/Layout'
import Body from './components/Body'
import Renderizado from './components/Renderizado'
import ThemeContext, {themes} from './context';



import './App.css'


function App() {
  const [tema, setTema] = useState(themes.claro)

  const handleTema = () => {
    tema === themes.oscuro ? setTema(themes.claro) : setTema(themes.oscuro)
  }

  return (
    <div className='App'>
        <ThemeContext.Provider value={{tema, handleTema}}>
            <Layout>
                <Navbar/>
                <Body/>
                <Renderizado/>
            </Layout>

        </ThemeContext.Provider>
    </div>
  )
}

export default App
