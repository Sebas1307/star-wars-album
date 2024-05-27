import { PropTypes } from 'prop-types'

export const Pagination = ({
  nextPage,
  prevPage,
  isNextDisabled,
  isPrevDisabled,
  isLoading
}) => {
  return (
    <div className='flex text-black gap-3 justify-end mr-10'>
      <button
        onClick={prevPage}
        disabled={isPrevDisabled || isLoading}
        className='p-2 bg-white rounded-lg font-semibold'
      >
        Anterior
      </button>
      <button
        onClick={nextPage}
        disabled={isNextDisabled || isLoading}
        className='p-2 bg-white rounded-lg font-semibold'
      >
        Siguiente
      </button>
    </div>
  )
}

Pagination.propTypes = {
  nextPage: PropTypes.func.isRequired,
  prevPage: PropTypes.func.isRequired,
  isNextDisabled: PropTypes.bool.isRequired,
  isPrevDisabled: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired
}
