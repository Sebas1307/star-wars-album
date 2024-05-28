import { PropTypes } from 'prop-types'

export const Pack = ({ openPack, isOpened }) => {
  return (
    <button
      onClick={openPack}
      className='w-64 h-64 bg-custom-gray rounded-lg flex items-center justify-center'
    >
      {isOpened ? (
        <div className='text-bold'>Opened</div>
      ) : (
        <img
          src={'./src/assets/open.png'}
          alt='open'
          className='w-36 h-36'
        />
      )}
    </button>
  )
}

Pack.propTypes = {
  openPack: PropTypes.func.isRequired,
  isOpened: PropTypes.bool.isRequired
}
