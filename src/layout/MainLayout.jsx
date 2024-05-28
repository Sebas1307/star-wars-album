import { PropTypes } from 'prop-types'

const MainLayout = ({ children }) => {
  return (
    <div className='bg-black flex flex-col mx-64 h-[calc(100vh-120px)] pt-10'>
      {children}
    </div>
  )
}

export default MainLayout

MainLayout.propTypes = {
  children: PropTypes.object.isRequired
}
