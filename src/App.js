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
import CustomerService from "./services/CustomerService";

const App = () => {
    const owner = "appa@gmail.se";
    const [invoices, setInvoices] = useState([]);
    const [products, setProducts] = useState([]);
    const [customers, setCustomers] = useState([{
        name: "Kalle",
        address: "storgatan",
        zipCode: "45343",
        city: "Göteborg",
        country: "Sweden",
        telephone: "075-474638",
        email: "fksdjfalkj@gfkog.com",
    }, {
        name: "Challe",
        address: "storgatan",
        zipCode: "45343",
        city: "Göteborg",
        country: "Sweden",
        telephone: "075-474638",
        email: "fksdjfalkj@gfkog.com",
    }
    ]);

    useEffect(() => {
        InvoiceService.getInvoice("appa@gmail.se").then((res) => {
            setInvoices(res.data);
        });
        ProductService.getProducts("appa@gmail.se").then((res) => {
            setProducts(res.data);
        });
        /*        CustomerService.getCustomers("appa@gmail.se").then((res) => {
                    setCustomers(res.data);
                })*/
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

    // Add a customer
    const addCustomer = async (customer) => {
        await CustomerService.createCustomer(customer).then((res) => console.log(res));
    };

    // Delete a customer
    const deleteCustomer = async (customerName) => {
        await CustomerService.deleteCustomer(owner, customerName).then((res) => {
            res.status === 204
                ? setCustomers(
                customers.filter((customer) => customer.name !== customerName)
                )
                : alert("Error Deleting This Customer");
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
                    render={() => <AddInvoice owner={owner} productList={products} customerList={customers}/>}
                />

                <Route
                    path="/customers"
                    exact
                    render={() =>
                        <CustomerPage
                            customers={customers}
                            onAdd={addCustomer}
                            onDelete={deleteCustomer}
                        />
                    }
                />


            </div>
        </Router>
    );
};

export default App;
