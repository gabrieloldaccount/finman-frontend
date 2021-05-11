import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import "../../styles/Title.css";

const Header = () => {
  const location = useLocation();

  // Switches title to correspond to tab selected in NavBar
  function titleSwitchSmall() {
    switch (location.pathname) {
      case "/products":
        return "Product ";
      case "/NewInvoice":
        return "Create ";
      case "/all-invoices":
        return "All";
      default:
        return "Home";
    }
  }

  function titleSwitchLarge() {
    switch (location.pathname) {
      case "/products":
        return "Catalog";
      case "/NewInvoice":
        return "Invoice";
      case "/all-invoices":
        return " Invoices";
      default:
        return "page";
    }
  }

  return (
    <header className="header">
      <span className="smallTitle">{titleSwitchSmall()}</span>
      <span className="largeTitle">{titleSwitchLarge()}</span>
    </header>
  );
};

Header.defaultProps = {
  title: "Welcome to A.Finman ",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
