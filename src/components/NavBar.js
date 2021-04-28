
import { Nav, NavItem, NavLink } from 'reactstrap'
import './NavBar.css'
import logo from '../logo.png'


const NavBar = () => {
    return (
            <Nav  className='navbar'>
                <img src={logo} alt="logo" className='logo'/>
                <NavItem className='navItem'>
                    <h1>A.Finman</h1>
                </NavItem>

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
                </NavItem>
                <NavItem className='navItem'>
                    <NavLink className='navLink' href="#">Sign out</NavLink>
                </NavItem>

            </Nav>

    );
}

export default NavBar;