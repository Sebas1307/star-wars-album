import { useContext } from 'react'
import { MainContext } from '../../context/MainContext'

const URL_BASE = 'https://swapi.dev/api'

export const usePacks = () => {
  const {
    packs,
    setPacks,
    isLocked,
    setIsLocked,
    setTimeLeft,
    setStickersOwned
  } = useContext(MainContext)

  const configs = [
    {
      films: 1,
      people: 3,
      starships: 1
    },
    {
      films: 0,
      people: 3,
      starships: 2
    }
  ]

  const categoryMax = {
    films: 6,
    people: 82,
    starships: 36
  }

  const getRamdomNumber = (max) => Math.floor(Math.random() * max)

  const openPack = () => {
    const randomConfig = configs[getRamdomNumber(configs.length)]
    for (let category in randomConfig) {
      for (let i = 0; i < randomConfig[category]; i++) {
        const randonItem = getRamdomNumber(categoryMax[category])
        fetch(`${URL_BASE}/${category}/${randonItem}`)
          .then((res) => res.json())
          .then((data) => {
            setStickersOwned((prev) => [...prev, data])
          })
      }
    }
  }

  const handleClick = (id) => {
    if (isLocked) return

    openPack()

    setIsLocked(true)
    setTimeLeft(60)

    const timer = setInterval(() => {
      setTimeLeft((time) => time - 1)
    }, 1000)

    setTimeout(() => {
      setIsLocked(false)
      clearInterval(timer)
      setTimeLeft(0)
    }, 60000)

    setPacks(
      packs.map((pack) => (pack.id === id ? { ...pack, isOpened: true } : pack))
    )
  }

  return { handleClick, packs }
}
