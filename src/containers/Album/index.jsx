import { Header } from './Header'
import { StickerList } from './StickerList'
import { Pagination } from './Pagination'
import { useAlbum } from '../../hooks/Album/useAlbum'
import MainLayout from '../../layout/MainLayout'
import { Divider } from '../../components/Divider'
import ReactModal from 'react-modal'

const Album = () => {
 const {
  currentCategory,
  categoryList,
  nextPage,
  prevPage,
  isNextDisabled,
  isPrevDisabled,
  isLoading,
  handleCategoryChange,
  stickerSelected,
  setStickerSelected
 } = useAlbum()

 return (
  <MainLayout>
   <Header
    handleCategoryChange={handleCategoryChange}
    currentCategory={currentCategory}
   />
   <Divider />
   <ReactModal
    isOpen={Object.keys(stickerSelected).length > 0}
    onRequestClose={() => setStickerSelected({})}
    shouldCloseOnOverlayClick={true}
    style={{
     overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)'
     },
     content: {
      width: '300px',
      height: '300px',
      margin: 'auto',
      borderRadius: '10px',
      border: 'none',
      background: '#48494A'
     }
    }}
   >
    <h1 className='text-2xl text-center text-black'>Album</h1>
    {stickerSelected?.title ?? stickerSelected?.name ?? 'Not found'}
   </ReactModal>
   <StickerList
    className='flex-grow'
    currentCategory={currentCategory}
    categoryList={categoryList}
    setStickerSelected={setStickerSelected}
   />
   <Pagination
    nextPage={nextPage}
    prevPage={prevPage}
    isNextDisabled={isNextDisabled}
    isPrevDisabled={isPrevDisabled}
    isLoading={isLoading}
   />
  </MainLayout>
 )
}

export default Album
