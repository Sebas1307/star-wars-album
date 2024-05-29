import { PropTypes } from 'prop-types'

export const Header = ({ handleCategoryChange, currentCategory }) => {
  return (
    <ul className='flex gap-10 bg-black w-full justify-around'>
      <li className='text-md text-white'>Total (128)</li>
      <li>
        <button
          onClick={() => handleCategoryChange('films')}
          className={`
        text-md 
        ${currentCategory === 'films' ? 'text-white' : 'text-gray-500'}`}
        >
          Películas (6)
        </button>
      </li>
      <li>
        <button
          onClick={() => handleCategoryChange('people')}
          className={`
        text-md 
        ${currentCategory === 'people' ? 'text-white' : 'text-gray-500'}`}
        >
          Personajes (82)
        </button>
      </li>
      <li>
        <button
          onClick={() => handleCategoryChange('starships')}
          className={`
        text-md 
        ${currentCategory === 'starships' ? 'text-white' : 'text-gray-500'}`}
        >
          Naves (36)
        </button>
      </li>
    </ul>
  )
}
Header.propTypes = {
  handleCategoryChange: PropTypes.func.isRequired,
  currentCategory: PropTypes.string.isRequired
}