import { PropTypes } from 'prop-types'

export const Pack = ({ handleClick, isOpened }) => {
  return (
    <button
      onClick={handleClick}
      className='w-64 h-64 bg-custom-gray rounded-lg flex items-center justify-center'
    >
      <img
        src={
          isOpened ? '' : './src/assets/open.png'
        }
        alt='open'
        className='w-36 h-36'
      />
    </button>
  )
}

Pack.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isOpened: PropTypes.bool.isRequired
}
