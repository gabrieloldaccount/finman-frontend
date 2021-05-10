import "../../styles/NavBar.css";
import logo from "../../assets/logo.png";
import dot from "../../assets/dot.png";
import { useLocation } from "react-router-dom";

import { Nav, Navbar } from "react-bootstrap";

const NavBar = () => {
  const location = useLocation();
  // function that tells were to put the dot depending on path
  function dotSwitch() {
    switch (location.pathname) {
      case "/products":
        return "product catalog";
      case "/NewInvoice":
        return "newinvoice";
      case "/all-invoices":
        return "all-invoices";
      case "/profile":
        return "profile";
      default:
        return "home";
    }
  }

  return (
    <Navbar className="navbar" expand="lg">
      <a href="/">
        <img src={logo} alt="logo" className="logo" />
      </a>
      <a className="title" href="/">
        A. Finman
      </a>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <span>
            {dotSwitch() === "home" && (
              <img src={dot} alt="dot" className="dot" />
            )}
            <a className="link" href="/">
              Home
            </a>
          </span>

          <span>
            {dotSwitch() === "product catalog" && (
              <img src={dot} alt="dot" className="dot" />
            )}
            <a className="link" href="/products">
              Product Catalog
            </a>
          </span>

          <span>
            {dotSwitch() === "newinvoice" && (
              <img src={dot} alt="dot" className="dot" />
            )}
            <a className="link" href="/NewInvoice">
              Create Invoice
            </a>
          </span>

          <span>
            {dotSwitch() === "all-invoices" && (
              <img src={dot} alt="dot" className="dot" />
            )}
            <a className="link" href="/all-invoices">
              All Invoices
            </a>
          </span>

          <span>
            {dotSwitch() === "profile" && (
              <img src={dot} alt="dot" className="dot" />
            )}
            <a className="link" href="/profile">
              Profile
            </a>
          </span>

          <a className="signout" href="/">
            Sign out
          </a>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
