import {useEffect, useState} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from "./components/Header";
import AddInvoice from "./components/AddInvoice";
import About from "./components/About";
import NavBar from "./components/NavBar";
import ProductPage from "./components/ProductPage";
import HomePage from "./components/HomePage";
import InvoiceService from "./api-services/InvoiceService";
import InvoiceList from "./components/seeInvoicesComponents/InvoiceList";
import ProductService from "./api-services/ProductService";
import './index.css'

//TODO: Remove Items-state here. It is in AddInvoice instead .

const App = () => {
  const [owner, setOwner] = useState("appa@gmail.se");
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

  // Add Invoice (is handled by components directly)
  /*  const addInvoice = async (invoiceJson, pdfBlob, email) => {
      console.log("JSON: " + JSON.stringify(invoiceJson));
      console.log("EMAIL: " + email);

      await InvoiceService.createInvoice(invoiceJson, pdfBlob, email).then(
        (res) => {
          res.status === 201
            ? setInvoices([...invoices, invoiceJson])
            : alert("Error creating this product");
        }
      );
    };*/

  return (
    <Router>
      <div className="background">
        <NavBar />
        <Header />
        <Route path="/" exact render={(props) => <HomePage props={props}/>} />
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
        <Route path="/about" component={About} />

      </div>
    </Router>
  );
};

export default App;
