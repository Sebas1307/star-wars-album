import PropTypes from 'prop-types'
import Album from './Album'
import Packs from './Packs'

const MainContainer = ({view}) => {
  return view === 'album' ? <Album /> : <Packs />
}

export default MainContainer

MainContainer.propTypes = {
  view: PropTypes.string.isRequired
}