import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'

const Header = () => {
    const location = useLocation()

    // Switches title to correspond to tab selected in NavBar
    function titleSwitch() {
        switch(location.pathname) {
            case '/':
                return 'Welcome to A.Finman';
            case '/products':
                return 'Product Catalog';
            case '/NewInvoice':
                return 'Create a New Invoice';
        }
    }

    return (
        <header className='header'>
            <h1>
                {
                    titleSwitch()
                }
            </h1>
        </header>
    );
}

Header.defaultProps = {
  title: 'Welcome to A.Finman ',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header
