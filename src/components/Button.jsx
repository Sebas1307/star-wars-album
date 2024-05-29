import React from 'react'
import { PropTypes } from 'prop-types'

export const Button = ({ label, action }) => {
 return (
  <button
   onClick={action}
   className='inline-flex h-12 animate-background-shine items-center justify-center rounded-md border border-gray-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-gray-400 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50'
  >
   {label}
  </button>
 )
}

Button.propTypes = {
 label: PropTypes.string.isRequired,
 action: PropTypes.func.isRequired
}
