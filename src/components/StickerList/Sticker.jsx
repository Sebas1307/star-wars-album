import PropTypes from 'prop-types'
import { useContext } from 'react'
import { MainContext } from '../../context/MainContext'
import { Category } from '../Category'

export const Sticker = ({
 item,
 rarity,
 name,
 currentCategory,
 position,
 secundaryButton,
 setStickerSelected
}) => {
 const { stickersOwned } = useContext(MainContext)
 const isOwned = stickersOwned.find(
  (sticker) => sticker.created === item.created
 )

 return (
  <div className='grid place-content-center p-1 rounded-md justify-center items-center'>
   <button
    onClick={() => {
     setStickerSelected(item)
    }}
    className='h-52 w-52 bg-custom-gray rounded-xl flex items-center justify-center relative'
   >
    <Category currentCategory={currentCategory} />
    {isOwned && (
     <img
      src={'./src/assets/owned.png'}
      alt='sticker'
      className='w-24 h-24'
     />
    )}

    {position && (
     <div className='m-3 font-semibold text-white text-sm w-auto inline-block absolute bottom-1 left-1'>
      #{position}
     </div>
    )}
   </button>

   <div className='flex gap-2 pt-3 pl-3'>
    <div
     className={`p-1 w-10 rounded-full ${
      rarity === 'special' ? 'bg-red-400' : 'bg-blue-500'
     }`}
    ></div>
    <div
     className={`p-1 rounded-full ${
      rarity === 'special' ? 'bg-red-400' : 'bg-blue-500'
     }`}
    ></div>
   </div>

   <div className='flex justify-between'>
    <span className='bg-gradient-to-t from-[#E5E4E2] to-[#474a51] bg-clip-text text-[16px] text-transparent'>
     {isOwned && name}
    </span>
    {secundaryButton && secundaryButton()}
   </div>
  </div>
 )
}

Sticker.propTypes = {
 item: PropTypes.object.isRequired,
 currentCategory: PropTypes.string,
 position: PropTypes.number,
 secundaryButton: PropTypes.func,
 setStickerSelected: PropTypes.func,
 name: PropTypes.string,
 rarity: PropTypes.string
}
