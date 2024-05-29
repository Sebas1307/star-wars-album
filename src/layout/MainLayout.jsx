import { PropTypes } from 'prop-types'

const MainLayout = ({ children }) => {
 return (
  <div className='flex items-center justify-center flex-wrap h-[650px] mx-10 mt-10'>
   {children}
  </div>
 )
}

export default MainLayout

MainLayout.propTypes = {
 children: PropTypes.object.isRequired
}
