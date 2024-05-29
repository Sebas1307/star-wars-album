import PropTypes from 'prop-types'
import { Sticker } from './Sticker'
import { useContext } from 'react'
import { MainContext } from '../context/MainContext'

export const StickerList = ({
 currentCategory,
 categoryList,
 setStickerSelected
}) => {
 const { stickersOwned } = useContext(MainContext)
 return (
  <div className='flex flex-wrap items-center justify-center gap-4 w-full place-items-center'>
   {categoryList?.results?.map((item, index) => {
    const isOwned = stickersOwned.find(
     (sticker) => sticker.created === item.created
    )
    return (
     <Sticker
      item={item}
      name={item.name ?? item.title ?? 'Not found'}
      rarity={item.rarity}
      isOwned={isOwned}
      setStickerSelected={setStickerSelected}
      currentCategory={currentCategory}
      position={item.position}
      key={index}
     />
    )
   })}
  </div>
 )
}

StickerList.propTypes = {
 categoryList: PropTypes.object.isRequired,
 currentCategory: PropTypes.string.isRequired,
 setStickerSelected: PropTypes.func.isRequired
}
