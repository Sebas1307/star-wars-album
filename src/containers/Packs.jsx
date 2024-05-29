import React from 'react'
import MainLayout from '../layout/MainLayout'
import { Pack } from '../components/Pack'
import { usePacks } from '..//hooks/Packs/usePacks'
import { NewStickerOwned } from '../components/NewStickerOwned'

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

 const sticker = stickersOwned.find(
  (sticker) => sticker?.created === packResult[nextSticker]?.created
 )

 return (
  <MainLayout>
   <div className='relative inset-0 flex justify-center h-[650px]'>
    <div className='flex flex-wrap items-center justify-center gap-10'>
     <PackList
      packs={packs}
      openPack={openPack}
     />
    </div>
    <NewStickerOwned
     packResult={packResult}
     nextSticker={nextSticker}
     setNextSticker={setNextSticker}
     sticker={sticker}
     setStickersOwned={setStickersOwned}
     stickersOwned={stickersOwned}
    />
   </div>
  </MainLayout>
 )
}

const PackList = ({ packs, openPack }) =>
 packs.map((pack) => (
  <Pack
   key={pack.id}
   openPack={() => openPack(pack.id)}
   isOpened={pack.isOpened}
  />
 ))

export default Packs
