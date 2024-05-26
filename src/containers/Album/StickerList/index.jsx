import PropTypes from 'prop-types'
import { Sticker } from './Sticker'

export const StickerList = ({ data }) => {
  return (
    <div className='grid grid-cols-5 w-full place-items-center'>
      {data?.map((item, index) => (
        <Sticker
          item={item}
          key={index}
        />
      ))}
    </div>
  )
}

StickerList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired
}
