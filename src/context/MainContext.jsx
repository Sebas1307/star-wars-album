import { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const MainContext = createContext(null)

function MainContextProvider({ children }) {
  const initialPacks = [
    {
      id: 1,
      isOpened: false
    },
    {
      id: 2,
      isOpened: false
    },
    {
      id: 3,
      isOpened: false
    },
    {
      id: 4,
      isOpened: false
    }
  ]

  const [packs, setPacks] = useState(initialPacks)
  const [isLocked, setIsLocked] = useState(false)
  const [timeLeft, setTimeLeft] = useState(0)
  const [stickersOwned, setStickersOwned] = useState([])

  return (
    <MainContext.Provider
      value={{
        packs,
        setPacks,
        isLocked,
        setIsLocked,
        timeLeft,
        setTimeLeft,
        stickersOwned,
        setStickersOwned
      }}
    >
      {children}
    </MainContext.Provider>
  )
}

MainContextProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export default MainContextProvider
