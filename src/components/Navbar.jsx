import { PropTypes } from 'prop-types'
import { useContext } from 'react'
import { Button } from './Button'
import { MainContext } from '../context/MainContext'

export const Navbar = ({ setView }) => {
 const { timeLeft } = useContext(MainContext)
 return (
  <nav className='bg-black p-8 flex justify-between'>
   <ul className='flex'>
    <li>
     <Button
      label='Obtener laminas'
      action={() => setView('packs')}
     />
    </li>
    <li>
     <button
      onClick={() => setView('album')}
      className='p-3 rounded-md font-semibold'
     >
      Mi Álbum
     </button>
    </li>
   </ul>
   <div className='font-semibold'>
    {timeLeft > 0
     ? `Tiempo restante: ${timeLeft}`
     : '¡Tienes sobres pendientes por abrir!'}
   </div>
  </nav>
 )
}
Navbar.propTypes = {
 setView: PropTypes.func.isRequired
}
