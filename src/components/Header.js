import PropTypes from 'prop-types'
import {useLocation} from 'react-router-dom'

const Header = () => {
    const location = useLocation()

    // Switches title to correspond to tab selected in NavBar
    function titleSwitchSmall() {
        switch (location.pathname) {
            case '/':
                return 'Home';
            case '/products':
                return 'Product ';
            case '/NewInvoice':
                return 'Create a New Invoice';
        }
    }

    function titleSwitchLarge() {
        switch (location.pathname) {
            case '/':
                return 'page';
            case '/products':
                return 'Catalog';
            case '/NewInvoice':
                return 'Invoice';
            case '/all-invoices':
                return ' Invoices'
        }
    }

    return (
        <header className='header'>
                <span className='smallTitle'>
                    {
                        titleSwitchSmall()
                    }
                </span>
                <span className='largeTitle'>
                    {
                        titleSwitchLarge()
                    }
                </span>
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
