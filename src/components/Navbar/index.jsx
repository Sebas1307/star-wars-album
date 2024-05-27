import { PropTypes } from 'prop-types'

export const Navbar = ({ setView }) => {
  return (
    <nav className='bg-black p-6 flex justify-between'>
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
        TIMER
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  setView: PropTypes.func.isRequired
}
