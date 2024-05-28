import PropTypes from 'prop-types'
import { useContext } from 'react'
import { MainContext } from '../../../../context/MainContext'

export const Sticker = ({
  item,
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
    <div>
      <button onClick={()=>{
        setStickerSelected(item)
        }} className='h-52 w-52 bg-custom-gray rounded-xl flex items-center justify-center relative'>
        {currentCategory && (
          <div className='p-1 m-3 rounded bg-black font-semibold text-white text-sm w-auto inline-block absolute top-1 left-1'>
            {currentCategory}
          </div>
        )}

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
            item.rarity === 'special' ? 'bg-red-400' : 'bg-blue-500'
          }`}
        ></div>
        <div
          className={`p-1 rounded-full ${
            item.rarity === 'special' ? 'bg-red-400' : 'bg-blue-500'
          }`}
        ></div>
      </div>

      <div className='flex justify-between'>
        <div className='p-3'>
          {isOwned && (item?.title ?? item?.name ?? 'Not found')}
        </div>
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
  setStickerSelected: PropTypes.func
}
