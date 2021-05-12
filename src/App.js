import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AddInvoice from "./components/invoices/AddInvoice";
import NavBar from "./components/header/NavBar";
import ProductPage from "./components/products/ProductPage";
import HomePage from "./components/home/HomePage";
import InvoiceService from "./services/InvoiceService";
import InvoiceList from "./components/invoices/InvoiceList";
import ProductService from "./services/ProductService";
import AuthPage from "./components/auth/AuthPage"
import "./styles/index.css";
import Header from "./components/header/Header";

const instagramAuthUrl = () => {
  const BASE_URL = "https://api.instagram.com/oauth/authorize/";

  return (
    BASE_URL +
    `?client_id=518529385822545` +
    `&redirect_uri=https://localhost:3000/auth/` +
    `&scope=user_profile,user_media` +
    `&response_type=code`
  );
};

const App = () => {
  const owner = "appa@gmail.se";
  const [invoices, setInvoices] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    InvoiceService.getInvoice("appa@gmail.se").then((res) => {
      setInvoices(res.data);
    });
    ProductService.getProducts("appa@gmail.se").then((res) => {
      setProducts(res.data);
    });
  }, []);

  // Add a product
  const addProduct = async (product) => {
    await ProductService.createProduct(product).then((res) => console.log(res));
  };

  // Delete a product
  const deleteProduct = async (productName) => {
    await ProductService.deleteProduct(owner, productName).then((res) => {
      res.status === 204
        ? setProducts(
            products.filter((product) => product.name !== productName)
          )
        : alert("Error Deleting This Product");
    });
  };

  return (
    <Router>
      <div className="background">
        <NavBar />
        <Header />
        {/* // TODO: move this to somewhere else */}
        <Link to={{ pathname: instagramAuthUrl() }} target="_blank">
          <button>to instagram login</button>
        </Link>
        <button onClick={()=>localStorage.clear()}>cleaer</button>
        <Route path="/" exact render={(props) => <HomePage props={props} />} />
        <Route
          path="/all-invoices"
          render={(props) => (
            <>
              <InvoiceList props={props} invoiceList={invoices} />
            </>
          )}
        />
        <Route
          path="/products"
          exact
          render={() => (
            <ProductPage
              owner={owner}
              products={products}
              onAdd={addProduct}
              onDelete={deleteProduct}
            />
          )}
        />
        <Route
          path="/newinvoice"
          exact
          render={() => <AddInvoice owner={owner} productList={products} />}
        />
        <Route
          path="/auth"
          exact
          render={() => <AuthPage />}
        />
      </div>
    </Router>
  );
};

export default App;
