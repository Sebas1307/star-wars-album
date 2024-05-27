import PropTypes from 'prop-types'

export const Sticker = ({ item, currentCategory }) => {
  return (
    <div>
      <div className='h-52 w-52 bg-custom-gray rounded-xl'>
        <div className='p-1 m-3 rounded bg-black font-semibold text-white text-sm w-auto inline-block'>
          {currentCategory}
        </div>
      </div>
      <div className='flex gap-2 pt-3 pl-3'>
        <div className={`p-1 w-10 rounded-full ${item.rarity === 'special' ? 'bg-orange-400' : 'bg-blue-400'}`}></div>
        <div className={`p-1 rounded-full ${item.rarity === 'special' ? 'bg-orange-400' : 'bg-blue-400'}`}></div>
      </div>
      <div className='p-3'>{item?.title ?? item?.name ?? 'loading'}</div>
    </div>
  )
}

Sticker.propTypes = {
  item: PropTypes.object.isRequired,
  currentCategory: PropTypes.string.isRequired
}