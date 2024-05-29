import { PropTypes } from 'prop-types'

export const Header = ({ handleCategoryChange, currentCategory }) => {
  return (
    <ul className='flex gap-10 bg-black w-full justify-around'>
      <li className='text-base text-white'>TOTAL (128)</li>
      <li>
        <button
          onClick={() => handleCategoryChange('films')}
          className={`
        text-base 
        ${currentCategory === 'films' ? 'text-white' : 'text-gray-500'}`}
        >
          PELICULAS (6)
        </button>
      </li>
      <li>
        <button
          onClick={() => handleCategoryChange('people')}
          className={`
        text-base 
        ${currentCategory === 'people' ? 'text-white' : 'text-gray-500'}`}
        >
          PERSONAJES (82)
        </button>
      </li>
      <li>
        <button
          onClick={() => handleCategoryChange('starships')}
          className={`
        text-base 
        ${currentCategory === 'starships' ? 'text-white' : 'text-gray-500'}`}
        >
          NAVES (36)
        </button>
      </li>
    </ul>
  )
}

Header.propTypes = {
  handleCategoryChange: PropTypes.func.isRequired,
  currentCategory: PropTypes.string.isRequired
}
