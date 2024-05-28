import PropTypes from 'prop-types'
import { Sticker } from './Sticker'

export const StickerList = ({ currentCategory, categoryList, setStickerSelected }) => {
  return (
    <div className='grid grid-cols-5 w-full place-items-center'>
      {categoryList?.results?.map((item, index) => (
        <Sticker
          item={item}
          setStickerSelected={setStickerSelected}
          currentCategory={currentCategory}
          position={item.position}
          key={index}
        />
      ))}
    </div>
  )
}

StickerList.propTypes = {
  categoryList: PropTypes.object.isRequired,
  currentCategory: PropTypes.string.isRequired,
  setStickerSelected: PropTypes.func.isRequired
}
