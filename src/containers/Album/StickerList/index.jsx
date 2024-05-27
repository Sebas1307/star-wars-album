import PropTypes from 'prop-types'
import { Sticker } from './Sticker'

export const StickerList = ({ currentCategory, categoryList }) => {
  return (
    <div className='grid grid-cols-5 w-full place-items-center'>
      {categoryList?.results?.map((item, index) => (
        <Sticker
          currentCategory={currentCategory}
          item={item}
          key={index}
        />
      ))}
    </div>
  )
}

StickerList.propTypes = {
  categoryList: PropTypes.object.isRequired,
  currentCategory: PropTypes.string.isRequired
}
