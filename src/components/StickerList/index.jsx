import PropTypes from 'prop-types'
import { Sticker } from './Sticker'

export const StickerList = ({
 currentCategory,
 categoryList,
 setStickerSelected
}) => {
 return (
  <div className='flex flex-wrap items-center justify-center gap-4 w-full place-items-center'>
   {categoryList?.results?.map((item, index) => (
    <Sticker
     item={item}
     name={item.name ?? item.title ?? 'Not found'}
     rarity={item.rarity}
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
