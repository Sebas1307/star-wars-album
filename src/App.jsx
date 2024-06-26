import { useState } from 'react'
import { Navbar } from './components/Navbar'
import MainContainer from './containers/MainContainer'
import MainContextProvider from './context/MainContext'

function App() {
 const [view, setView] = useState('packs')
 return (
  <div style={{ width: '100%', height: '100vh' }}>
   <MainContextProvider>
    <Navbar setView={setView} />
    <MainContainer view={view} />
   </MainContextProvider>
  </div>
 )
}

export default App
