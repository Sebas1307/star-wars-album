import { Header } from '../../src/components/Header'
import { StickerList } from '../../src/components/StickerList'
import { Pagination } from '../../src/components/Pagination'
import { useAlbum } from '../../src/hooks/Album/useAlbum'
import MainLayout from '../../src/layout/MainLayout'
import { Divider } from '../../src/components/Divider'
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
   <div className='bg-black h-[650px]'>
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
     <h1 className='text-2xl text-center text-white'>
      {stickerSelected?.title ?? stickerSelected?.name ?? 'Not found'}
     </h1>
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
   </div>
  </MainLayout>
 )
}

export default Album
