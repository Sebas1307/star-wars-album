import { useContext, useEffect, useState } from 'react'
import { MainContext } from '../../context/MainContext'

const URL_BASE = 'https://swapi.dev/api'

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

const getRamdomNumber = (max) => Math.floor(Math.random() * max - 1) + 1

export const usePacks = () => {
  const {
    packs,
    setPacks,
    isLocked,
    setIsLocked,
    setTimeLeft,
    setStickersOwned,
    stickersOwned
  } = useContext(MainContext)

  const [packResult, setPackResult] = useState([])
  const [nextSticker, setNextSticker] = useState(0)

  useEffect(() => {
    if (nextSticker >= 5) {
      setPackResult([])
    }
    if (nextSticker >= 6) {
      setPackResult([])
      setNextSticker(0)
    }
  }, [nextSticker])

  const fillPack = () => {
    const randomConfig = configs[getRamdomNumber(configs.length)]
    for (let category in randomConfig) {
      for (let i = 0; i < randomConfig[category]; i++) {
        const randonItem = getRamdomNumber(categoryMax[category])
        fetch(`${URL_BASE}/${category}/${randonItem}`)
          .then((res) => res.json())
          .then((data) => {
            setPackResult((prev) => [...prev, data])
          })
      }
    }
  }

  const openPack = (id) => {
    const pack = packs.find(pack => pack.id === id)
    if (!pack || pack.isOpened) return

    if (isLocked) return
    fillPack()
    setIsLocked(true)
    setTimeLeft(60)
    const timer = setInterval(() => {
      setTimeLeft((time) => time - 1)
    }, 1000)
    setTimeout(() => {
      setIsLocked(false)
      clearInterval(timer)
      setTimeLeft(0)
    }, 6000)
    setNextSticker(0)
    setPacks(
      packs.map((pack) => (pack.id === id ? { ...pack, isOpened: true } : pack))
    )
  }

  return {
    openPack,
    packs,
    packResult,
    setPackResult,
    setStickersOwned,
    stickersOwned,
    nextSticker,
    setNextSticker
  }
}
