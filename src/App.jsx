import { useState } from 'react'
import { Navbar } from './components/Navbar'
import MainContainer from './containers/MainContainer'
import MainContextProvider from './context/MainContext'

function App() {
  const [view, setView] = useState('album')
  return (
    <div style={{ width: '100%' }}>
      <MainContextProvider>
        <Navbar setView={setView} />
        <MainContainer view={view} />
      </MainContextProvider>
    </div>
  )
}

export default App
