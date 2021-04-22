import {useState} from 'react'
import Products from './Products'
import Product from './Product';
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Invoice from "./Invoice";
import {Container, Row} from "react-bootstrap";

//TODO: Add proper CSS formatting in index.css
const AddItem = ({productList, onAddItem}) => {
    const [selectedProduct, setSelectedProduct] = useState('')
    const [quantity, setQuantity] = useState('')

    //The submit method for AddItems. Checks, submits and resets the internal state.
    const addItem = (e) => {
        e.preventDefault()

        //Input checking.
        if (!quantity) {
            alert('Please add an amount of items')
            return
        }

        //TODO: Fix error check with previous state of ids.
        //Small risk of identical id's on items.
        const id = Math.floor(Math.random()*10000000);

        //Passes values to AddInvoice where state is handled.
        onAddItem({id: id, quantity: quantity, name: selectedProduct.name, price: selectedProduct.price, unit: selectedProduct.unit})

        //Resets the internal state.
        setQuantity('')
    }

    return (
        //TODO: Implement proper product list read-in from db here.
        <Container>
            <Row>
                <Dropdown>
                    <Dropdown.Toggle variant="primary" id="dropdown-basic">
                        {selectedProduct === '' ? "Select Product" : selectedProduct.name}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {productList.map((product, index) => (
                            <Dropdown.Item onClick={() => setSelectedProduct(product)}>{product.name}</Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>

            <Form.Group controlId="formQuantity">
                <Form.Control type="number"
                              placeholder='Enter quantity'
                              value={quantity}
                              onChange={(e) => setQuantity(e.target.value)}/>
            </Form.Group>
            <Button variant='primary' onClick={(e) => addItem(e)}>Add item</Button>
            </Row>
        </Container>
    )
}

export default AddItem