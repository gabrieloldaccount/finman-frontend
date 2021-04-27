
import { Nav, NavItem, NavLink } from 'reactstrap'
import './NavBar.css'
import logo from '/Users/elinfredriksson/WebstormProjects/finman-frontend/src/logo.png'


const NavBar = () => {
    return (
        <div>

            <Nav  className='navbar'>
                <img src={logo} alt="logo" className='logo'/>
                <NavItem className='navItem'>
                    <NavLink className='navLink' href="/">Home</NavLink>
                </NavItem>
                <NavItem className='navItem'>
                    <NavLink className='navLink' href="/products">Product Catalog</NavLink>
                </NavItem>
                <NavItem className='navItem'>
                    <NavLink className='navLink' href="/NewInvoice">New Invoice</NavLink>
                </NavItem>
                <NavItem className='navItem'>
                    <NavLink className='navLink' href="#">All Invoices</NavLink>
                </NavItem>
                <NavItem className='navItem'>
                    <NavLink className='navLink' href="#">Profile</NavLink>
                </NavItem>
                <NavItem className='navItem'>
                    <NavLink className='navLink' href="#">Sign out</NavLink>
                </NavItem>

            </Nav>
        </div>
    );
}

export default NavBar;