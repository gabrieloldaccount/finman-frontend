import {useState, useEffect} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Invoices from './components/Invoices'
import Items from './components/Items'
import AddInvoice from './components/AddInvoice'
import About from './components/About'
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import InvoiceList from './components/seeInvoicesComponents/InvoiceList'

//TODO: Remove Items-state here. It is in AddInvoice instead.

const App = () => {
    const [invoices, setInvoices] = useState([])
    const [products, setProducts] = useState([])

    useEffect(() => {
        const getInvoices = async () => {
            const invoicesFromServer = await fetchInvoices()
            setInvoices(invoicesFromServer)
        }
        const getProducts = async () => {
            const productsFromServer = await fetchProducts()
            setProducts(productsFromServer)
        }

        getInvoices()
        getProducts()
    }, [])

    // Fetch the array of pre-defined products
    const fetchProducts = async () => {
        const res = await fetch('http://localhost:5000/products')
        const data = await res.json()

        return data
    }

    // Fetch a single product
    const fetchProduct = async (id) => {
        const res = await fetch(`http://localhost:5000/products/${id}`)
        const data = await res.json()

        return data
    }

    // Fetch previously added Invoices
    const fetchInvoices = async () => {
        const res = await fetch('http://localhost:5000/invoices')
        const data = await res.json()

        return data
    }

    // Fetch a specific Invoice
    const fetchInvoice = async (id) => {
        const res = await fetch(`http://localhost:5000/invoices/${id}`)
        const data = await res.json()

        return data
    }

    // Add Invoice
    const addInvoice = async (invoice) => {
        const res = await fetch('http://localhost:5000/invoices', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(invoice),
        })

        const data = await res.json()

        setInvoices([...invoices, data])
    }

    // Delete Invoice
    const deleteInvoice = async (id) => {
        const res = await fetch(`http://localhost:5000/invoices/${id}`, {
            method: 'DELETE',
        })
        res.status === 200
            ? setInvoices(invoices.filter((invoice) => invoice.id !== id))
            : alert('Error Deleting This Invoice')
    }


    return (
        <Router>
            <div className='container'>
                <Header/>
                <Route
                    path='/'
                    exact
                    render={(props) => (
                        <>
                            <AddInvoice productList={products} onAddInvoice={addInvoice}/>

                            {/* TODO: Move this to another page for displaying invoices already created.
                            {invoices.length > 0 ? (
                                <Invoices
                                    invoices={invoices}
                                    onDelete={deleteInvoice}
                                />
                            ) : (
                                'No Invoices To Show'
                            )}
                            */}
                        </>
                    )}
                />
                <Route
                    path='/all-invoices'
                    render={(props) => (
                        <>
                            <InvoiceList props={props} invoiceList={invoices}/>
                        </>
                    )}
                />
                <Route path='/about' component={About} />
                <Footer />
            </div>
        </Router>
    )
}

export default App