export const SecundaryButton = (
 sticker,
 setNextSticker,
 setStickersOwned,
 stickersOwned,
 packResult,
 nextSticker
) => (
 <button
  onClick={() => {
   setNextSticker((prev) => prev + 1)
   if (!sticker) {
    setStickersOwned([...stickersOwned, packResult[nextSticker]])
   }
  }}
  className='p-1 bg-orange-700 text-white rounded-lg'
 >
  {!sticker ? 'Agregar al álbum' : 'Descartar'}
 </button>
)
