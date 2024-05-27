import { Header } from './Header'
import { StickerList } from './StickerList'
import { Pagination } from './Pagination'
import { useAlbum } from '../../hooks/Album/useAlbum'

const Album = () => {
  const {
    currentCategory,
    categoryList,
    nextPage,
    prevPage,
    isNextDisabled,
    isPrevDisabled,
    isLoading,
    handleCategoryChange
  } = useAlbum()

  return (
    <div className='bg-black flex flex-col mx-64 h-screen pt-10'>
      <Header
        handleCategoryChange={handleCategoryChange}
        currentCategory={currentCategory}
      />
      <div className='border-b border-custom-gray my-4'></div>
      <StickerList
        className='flex-grow'
        currentCategory={currentCategory}
        categoryList={categoryList}
      />
      <Pagination
        nextPage={nextPage}
        prevPage={prevPage}
        isNextDisabled={isNextDisabled}
        isPrevDisabled={isPrevDisabled}
        isLoading={isLoading}
      />
    </div>
  )
}

export default Album
