import { useState, useEffect, useCallback } from 'react'

const BASE_URL = 'https://swapi.dev/api/'
const CATEGORIES = ['films', 'people', 'starships']

const fetchCategoryData = async (page, category) => {
  try {
    const response = await fetch(`${BASE_URL}${category}/?page=${page}`)
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Failed to fetch data:', error)
    throw error
  }
}

const processItems = (items, category, currentLength) => {
  return items.map((item, index) => {
    let itemClass = 'regular'
    if (category === 'films') {
      itemClass = 'special'
    } else if (category === 'people' && currentLength + index < 20) {
      itemClass = 'special'
    } else if (category === 'starships' && currentLength + index < 10) {
      itemClass = 'special'
    }
    return { ...item, rarity: itemClass }
  })
}

export const useAlbum = () => {
  const [page, setPage] = useState(1)
  const [currentCategory, setCurrentCategory] = useState('films')
  const [categoryList, setCategoryList] = useState({ results: [] })
  const [isLoading, setIsLoading] = useState(false)

  const loadData = useCallback(async () => {
    setIsLoading(true)
    try {
      const initialData = await fetchCategoryData(page, currentCategory)
      let allData = initialData.results
      let currentPage = page

      if (currentCategory === 'people' && page === 1) {
        while (allData.length < 20 && initialData.next) {
          currentPage += 1
          const nextPageData = await fetchCategoryData(
            currentPage,
            currentCategory
          )
          allData = allData.concat(nextPageData.results)
        }
      }

      const processedData = processItems(
        allData,
        currentCategory,
        (page - 1) * 10
      )
      setCategoryList({ ...initialData, results: processedData.slice(0, 10) })
    } catch (error) {
      console.error('Error loading data:', error)
    } finally {
      setIsLoading(false)
    }
  }, [page, currentCategory])

  useEffect(() => {
    loadData()
  }, [loadData])

  const nextPage = () => {
    if (isLoading) return
    if (categoryList.next) {
      setPage((prevPage) => prevPage + 1)
    } else {
      const nextCategoryIndex = CATEGORIES.indexOf(currentCategory) + 1
      if (nextCategoryIndex < CATEGORIES.length) {
        setPage(1)
        setCurrentCategory(CATEGORIES[nextCategoryIndex])
      }
    }
  }

  const prevPage = async () => {
    if (isLoading) return
    if (categoryList.previous) {
      setPage((prevPage) => prevPage - 1)
    } else {
      const prevCategoryIndex = CATEGORIES.indexOf(currentCategory) - 1
      if (prevCategoryIndex >= 0) {
        try {
          const data = await fetchCategoryData(1, CATEGORIES[prevCategoryIndex])
          const itemsPerPage = data.results.length
          const lastPage = Math.ceil(data.count / itemsPerPage)
          setPage(lastPage)
          setCurrentCategory(CATEGORIES[prevCategoryIndex])
        } catch (error) {
          console.error('Error loading previous category data:', error)
        }
      }
    }
  }

  const isNextDisabled =
    !categoryList.next &&
    CATEGORIES.indexOf(currentCategory) + 1 >= CATEGORIES.length
  const isPrevDisabled =
    !categoryList.previous && CATEGORIES.indexOf(currentCategory) - 1 < 0

  const handleCategoryChange = (category) => {
    if (currentCategory !== category) {
      setCurrentCategory(category)
      setPage(1)
    }
  }

  return {
    currentCategory,
    categoryList,
    nextPage,
    prevPage,
    isNextDisabled,
    isPrevDisabled,
    isLoading,
    handleCategoryChange
  }
}
