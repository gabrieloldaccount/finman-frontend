
import { Nav, NavItem, NavLink } from 'reactstrap'
import './NavBar.css'
import logo from '../logo.png'
import dot from '../dot.png'
import { useLocation } from 'react-router-dom'


const NavBar = () => {
    const location = useLocation()

    // function that tells were to put the dot depending on path
    function dotSwitch() {
        switch(location.pathname) {
            case '/':
                return 'home';
            case '/products':
                return 'product catalog';
            case '/NewInvoice':
                return 'newinvoice';
            case '/see-invoices':
                return 'see-invoices';
            case '/profile':
                return 'profile';
        }
    }

    return (
            <Nav  className='navbar'>
                <a href="/">
                    <img src={logo} alt="logo" className='logo'/>
                </a>
                <NavItem className='navItem'>
                    <a className='title' href="/">A. Finman</a>
                </NavItem>

                <NavItem className='navItem'>
                    <NavLink className='navLink' href="/">Home</NavLink>
                    {dotSwitch()=='home' && <img src={dot} alt="dot" className='dot'/>}
                </NavItem>
                <NavItem className='navItem'>
                    <NavLink className='navLink' href="/products">Product Catalog</NavLink>
                    {dotSwitch()=='product catalog' && <img src={dot} alt="dot" className='dot'/>}
                </NavItem>
                <NavItem className='navItem'>
                    <NavLink className='navLink' href="/NewInvoice">New Invoice</NavLink>
                    {dotSwitch()=='newinvoice' && <img src={dot} alt="dot" className='dot'/>}
                </NavItem>
                <NavItem className='navItem'>
                    <NavLink className='navLink' href="/see-invoices">All Invoices</NavLink>
                    {dotSwitch()=='see-invoices' && <img src={dot} alt="dot" className='dot'/>}
                </NavItem>
                <NavItem className='navItem'>
                    <NavLink className='navLink' href="/profile">Profile</NavLink>
                    {dotSwitch()=='profile' && <img src={dot} alt="dot" className='dot'/>}
                </NavItem>
                <NavItem className='navItem'>
                </NavItem>
                <NavItem className='navItem'>
                    <NavLink className='navLink' href="#">Sign out</NavLink>
                </NavItem>

            </Nav>

    );
}

export default NavBar;