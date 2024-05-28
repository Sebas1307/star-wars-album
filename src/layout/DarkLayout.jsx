import React from 'react'
import PropTypes from 'prop-types'

const DarkLayout = ({ children }) => {
  return (
    <>
      <div className='absolute inset-0 bg-black bg-opacity-50 z-20' />
      {children}
    </>
  )
}

DarkLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default DarkLayout
