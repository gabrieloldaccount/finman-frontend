import {useEffect, useState} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import AddInvoice from "./components/invoices/AddInvoice";
import NavBar from "./components/header/NavBar";
import ProductPage from "./components/products/ProductPage";
import HomePage from "./components/home/HomePage";
import InvoiceService from "./services/InvoiceService";
import InvoiceList from "./components/invoices/InvoiceList";
import ProductService from "./services/ProductService";
import "./styles/index.css";
import Header from "./components/header/Header";
import CustomerPage from "./components/customers/CustomerPage"

const App = () => {
    const owner = "appa@gmail.se";
    const [invoices, setInvoices] = useState([]);
    const [products, setProducts] = useState([]);

    //Todo: Data fetch from DB for customers.
    const [customers, setCustomers] = useState([{name: "Filip", telephone: "075-432323"}, {
        name: "Per",
        telephone: "025-424443"
    }, {name: "Laila", telephone: "072-452328"}]);

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
                <NavBar/>
                <Header/>
                <Route path="/" exact render={(props) => <HomePage props={props}/>}/>
                <Route
                    path="/all-invoices"
                    render={(props) => (
                        <>
                            <InvoiceList props={props} invoiceList={invoices}/>
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
                    render={() => <AddInvoice owner={owner} productList={products}/>}
                />

                <Route
                    path="/customers"
                    exact
                    render={() => <CustomerPage customers={customers}/>}
                />


            </div>
        </Router>
    );
};

export default App;
