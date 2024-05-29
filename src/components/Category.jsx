import { PropTypes } from 'prop-types'

export const Category = ({ currentCategory }) =>
 currentCategory && (
  <div className='p-1 m-3 rounded bg-black font-semibold text-white text-sm w-auto inline-block absolute top-1 left-1'>
   {currentCategory}
  </div>
 )

Category.propTypes = {
 currentCategory: PropTypes.string.isRequired
}
