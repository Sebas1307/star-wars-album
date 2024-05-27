import { useState } from 'react'
import { Navbar } from './components/Navbar'
import MainContainer from './containers/MainContainer'

function App() {
  const [view, setView] = useState('album')
  return (
    <div style={{ width: '100%' }}>
      <Navbar setView={setView} />
      <MainContainer view={view} />
    </div>
  )
}

export default App
