import React, { useContext } from 'react'
import MainLayout from '../../layout'
import { Pack } from '../../components/Pack'
import { usePacks } from '../../hooks/Packs/usePacks'

const Packs = () => {
  const { handleClick, packs } = usePacks()

  return (
    <MainLayout>
      <div className='flex justify-center items-center h-screen'>
        <div className='grid grid-cols-2 gap-4'>
          {packs.map((pack) => (
            <Pack
              key={pack.id}
              handleClick={() => handleClick(pack.id)}
              isOpened={pack.isOpened}
            />
          ))}
        </div>
      </div>
    </MainLayout>
  )
}

export default Packs
