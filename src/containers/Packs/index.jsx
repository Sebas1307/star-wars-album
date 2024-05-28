import React from 'react'
import MainLayout from '../../layout/MainLayout'
import { Pack } from '../../components/Pack'
import { usePacks } from '../../hooks/Packs/usePacks'
import { Sticker } from '../Album/StickerList/Sticker'

const Packs = () => {
  const {
    openPack,
    packs,
    packResult,
    nextSticker,
    setNextSticker,
    stickersOwned,
    setStickersOwned
  } = usePacks()

  const renderPacks = () =>
    packs.map((pack) => (
      <Pack
        key={pack.id}
        openPack={() => openPack(pack.id)}
        isOpened={pack.isOpened}
      />
    ))

  const sticker = stickersOwned.find(
    (sticker) => sticker?.created === packResult[nextSticker]?.created
  )

  const secundaryButton = () => (
    <button
      onClick={() => {
        setNextSticker(prev => prev + 1)
        if (!sticker) {
          setStickersOwned([...stickersOwned, packResult[nextSticker]])
        }
      }}
      className='p-1 bg-orange-700 text-white rounded-lg'
    >
      {!sticker ? 'Agregar al álbum' : 'Descartar'}
    </button>
  )

  const renderSticker = () =>
    packResult.length > 0 &&
    packResult[nextSticker] && (
      <div className='absolute flex justify-center items-center'>
        <img
          className='w-62 h-62 object-cover'
          src='src/assets/resplendor.png'
          alt='Centered image'
        />
        <div className='absolute'>
          <Sticker
            item={packResult[nextSticker]}
            setNextSticker={setNextSticker}
            secundaryButton={secundaryButton}
          />
        </div>
      </div>
    )

  return (
    <MainLayout>
      <div className='relative inset-0 flex justify-center items-center h-screen'>
        <div className='grid grid-cols-2 gap-4'>{renderPacks()}</div>
        {renderSticker()}
      </div>
    </MainLayout>
  )
}

export default Packs
