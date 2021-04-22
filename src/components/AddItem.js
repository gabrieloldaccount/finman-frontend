import {useState} from 'react'
import Products from './Products'
import Product from './Product';
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";

//TODO: Add proper CSS formatting in index.css
const AddItem = ({productList, onAddItem}) => {
    const [amount, setAmount] = useState('')
    const [name, setName] = useState('')
    const [unit, setUnit] = useState('')

    //The submit method for AddItems. Checks, submits and resets the internal state.
    const addItem = (e) => {
        e.preventDefault()

        //Input checking.
        if (!amount) {
            alert('Please add an amount of items')
            return
        }

        //TODO: Fix error check with previous state of ids.
        //Small risk of identical id's on items.
        const id = Math.floor(Math.random()*10000000);

        //Passes values to AddInvoice where state is handled.
        onAddItem({id: id, amount: amount, name: name, unit: unit})

        //Resets the internal state.
        setAmount('')
        setName('')
        setUnit('')

    }

    const testText = productList.json.stringify();

    return (
        //TODO: Implement proper product list read-in from db here.
        <Form className='addItem-form'>
            <div>
                <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Select product
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">{testText}</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            </div>

            <Form.Group controlId="formQuantity">
                <Form.Control type="number"
                              placeholder='Enter amount'
                              value={amount}
                              onChange={(e) => setAmount(e.target.value)}/>
            </Form.Group>

            <div className='form-control'>
                <label>Product</label>
                <input
                    type='text'
                    placeholder='Enter amount'
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
                <label>Amount</label>
                <input
                    type='text'
                    placeholder='Enter Customer Address'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label>Unit</label>
                <input
                    type='text'
                    placeholder='Enter Customer Zip Code'
                    value={unit}
                    onChange={(e) => setUnit(e.target.value)}
                />
            </div>
        </Form>
    )
}

export default AddItem