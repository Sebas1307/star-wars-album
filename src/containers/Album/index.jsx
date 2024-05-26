import { useState } from 'react'
import { Header } from './Header'
import { StickerList } from './StickerList'
import { useEffect } from 'react'
import { Pagination } from './Pagination'

const Album = () => {
  const baseUrl = 'https://swapi.dev/api/'
  const [data, setData] = useState(null)

  const fetchData = async (category, page = 1) => {
    fetch(baseUrl + category + '/?page=' + page)
      .then((response) => response.json())
      .then((data) => setData(data.results))
  }

  useEffect(() => {
    fetchData('films')
  }, [])

  return (
    <div className='bg-black flex flex-col mx-64 h-screen pt-10'>
      <Header />
      <div className='border-b border-custom-gray my-4'></div>
      <StickerList
        className='flex-grow'
        data={data}
      />
      <Pagination />
    </div>
  )
}

export default Album
