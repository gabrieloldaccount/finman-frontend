import {useState, useEffect} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Invoices from './components/Invoices'
import Items from './components/Items'
import AddInvoice from './components/AddInvoice'
import About from './components/About'

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
    //TODO: Change fetch call here to get the list of pre-defined products instead of items.
    const fetchProducts = async () => {
        const res = await fetch('http://localhost:5000/items')
        const data = await res.json()

        return data
    }

    // Fetch a single product
    const fetchProduct = async (id) => {
        const res = await fetch(`http://localhost:5000/items/${id}`)
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

    // Delete Task
    const deleteTask = async (id) => {
        const res = await fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'DELETE',
        })
        //We should control the response status to decide if we will change the state or not.
        res.status === 200
            ? setTasks(tasks.filter((task) => task.id !== id))
            : alert('Error Deleting This Task')
    }

    // Toggle Reminder
    const toggleReminder = async (id) => {
        const taskToToggle = await fetchTask(id)
        const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

        const res = await fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(updTask),
        })

        const data = await res.json()

        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, reminder: data.reminder } : task
            )
        )
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
                            <AddInvoice onAddInvoice={addInvoice}/>

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
                <Route path='/about' component={About} />
                <Footer />
            </div>
        </Router>
    )
}

export default App