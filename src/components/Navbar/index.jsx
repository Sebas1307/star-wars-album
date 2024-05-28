import { PropTypes } from 'prop-types'
import { MainContext } from '../../context/MainContext'
import { useContext } from 'react'

export const Navbar = ({ setView }) => {
  const { timeLeft } = useContext(MainContext)
  return (
    <nav className='bg-black p-8 flex justify-between'>
      <ul className='flex'>
        <li>
          <button
            onClick={() => setView('packs')}
            className='p-3 bg-white text-black font-semibold rounded-md'
          >
            Obtener laminas
          </button>
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
