import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'

const Header = ({title}) => {
  const location = useLocation()

  return (
      <header className='header'>
        <h1>
            {
                /*TODO: Make header well formatted for each page and not just pathname. Perhaps just use case and test for all pathnames to get right title.*/
                location.pathname
            }
        </h1>
      </header>
  )
}

Header.defaultProps = {
  title: 'Welcome to A.Finman ',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header
