import ReactModal from 'react-modal'
import { SecundaryButton } from './SecundatyButton'
import { Sticker } from './Sticker'
import { PropTypes } from 'prop-types'

export const NewStickerOwned = ({
 packResult,
 nextSticker,
 setNextSticker,
 sticker,
 setStickersOwned,
 stickersOwned
}) => {
 return (
  <ReactModal
   isOpen={packResult.length > 0 && packResult[nextSticker]}
   onRequestClose={() => setNextSticker(null)}
   shouldCloseOnOverlayClick={true}
   style={{
    overlay: {
     backgroundColor: 'rgba(0, 0, 0, 0.75)'
    },
    content: {
     width: '500px',
     height: '500px',
     margin: 'auto',
     border: 'none',
     background: 'transparent',
    }
   }}
  >
   <div className='absolute flex justify-center items-center'>
    <img
     className='w-62 h-62 object-cover'
     src='/assets/resplendor.png'
     alt='Centered image'
    />
    <div className='absolute'>
     <Sticker
      item={packResult[nextSticker]}
      rarity={packResult[nextSticker]?.rarity}
      isOwned={true}
      name={
       packResult[nextSticker]?.name ??
       packResult[nextSticker]?.title ??
       'Not found'
      }
      setNextSticker={setNextSticker}
      secundaryButton={SecundaryButton(
       sticker,
       setNextSticker,
       setStickersOwned,
       stickersOwned,
       packResult,
       nextSticker
      )}
     />
    </div>
   </div>
  </ReactModal>
 )
}

NewStickerOwned.propTypes = {
 packResult: PropTypes.array.isRequired,
 nextSticker: PropTypes.number.isRequired,
 setNextSticker: PropTypes.func.isRequired,
 sticker: PropTypes.object,
 setStickersOwned: PropTypes.func.isRequired,
 stickersOwned: PropTypes.array.isRequired
}
