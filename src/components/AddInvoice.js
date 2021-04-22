import {useState} from 'react'
import AddItem from "./AddItem";
import Items from "./Items"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import {Col, Container, Row} from "react-bootstrap";


const AddInvoice = ({productList, onAddInvoice}) => {
    const [customerName, setCustomerName] = useState('')
    const [customerAddress, setCustomerAddress] = useState('')
    const [customerZipCode, setCustomerZipCode] = useState('')
    const [customerEmail, setCustomerEmail] = useState('')
    const [invoiceDate, setInvoiceDate] = useState('')
    const [expirationDate, setExpirationDate] = useState('')
    const [bankgiro, setBankgiro] = useState('')
    const [ocrNumber, setOcrNumber] = useState('')
    const [items, setItems] = useState([])

    const onSubmit = (e) => {
        e.preventDefault()

        //TODO: Add more error-checking here.
        if (!customerName && !customerEmail) {
            alert('Please fill in all info for the invoice')
            return
        }

        onAddInvoice({
            customerName: customerName,
            customerAddress: customerAddress,
            customerZipCode: customerZipCode,
            customerEmail: customerEmail,
            invoiceDate: invoiceDate,
            expirationDate: expirationDate,
            bankgiro: bankgiro,
            ocrNumber: ocrNumber,
            items: items
        })

        setCustomerName('')
        setCustomerAddress('')
        setCustomerZipCode('')
        setCustomerEmail('')
        setInvoiceDate('')
        setExpirationDate('')
        setBankgiro('')
        setOcrNumber('')
        setItems([])
    }

    //Adds an item to this invoice's items list
    const addItem = (item) => {
        setItems([...items, item])
    }

    //Deletes an item from the invoice's items list
    const deleteItem = (id) => {
        setItems(items.filter((item) => item.id !== id))
    }

    return (
        <Form>
            <Container>
                <Row>
                    <Col>
                        <Form.Group controlId="formCustomerName">
                            <Form.Label>Customer Name</Form.Label>
                            <Form.Control type="string" value={customerName} placeholder="Enter customer name"
                                          onChange={(e) => setCustomerName(e.target.value)}/>
                        </Form.Group>
                        <Form.Group controlId="formCustomerAddress">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="string" value={customerAddress} placeholder="Enter Customer Address"
                                          onChange={(e) => setCustomerAddress(e.target.value)}/>
                        </Form.Group>

                        <Form.Group controlId="formCustomerZipcode">
                            <Form.Label>Zip code</Form.Label>
                            <Form.Control type="number" value={customerZipCode} placeholder="Enter Customer Zip Code"
                                          onChange={(e) => setCustomerZipCode(e.target.value)}/>
                        </Form.Group>
                        <Form.Group controlId="formCustomerEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" value={customerEmail} placeholder="Enter Customer Email"
                                          onChange={(e) => setCustomerEmail(e.target.value)}/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="formInvoiceDate">
                            <Form.Label>Invoice Date</Form.Label>
                            <Form.Control type="date" value={invoiceDate}
                                          onChange={(e) => setInvoiceDate(e.target.value)}/>
                        </Form.Group>
                        <Form.Group controlId="formExpirationDate">
                            <Form.Label>Expiration Date</Form.Label>
                            <Form.Control type="date" value={expirationDate}
                                          onChange={(e) => setExpirationDate(e.target.value)}/>
                        </Form.Group>
                        <Form.Group controlId="formBankgiro">
                            <Form.Label>Bank-giro</Form.Label>
                            <Form.Control type="number" value={bankgiro} placeholder="Enter Bankgiro"
                                          onChange={(e) => setBankgiro(e.target.value)}/>
                        </Form.Group>
                        <Form.Group controlId="formOCR">
                            <Form.Label>OCR</Form.Label>
                            <Form.Control type="number" value={ocrNumber} placeholder="Enter OCR"
                                          onChange={(e) => setOcrNumber(e.target.value)}/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <AddItem productList={productList} onAddItem={addItem}/>
                </Row>
                <Row>
                    {items.length > 0 ? (
                        <Items
                            items={items}
                            onDelete={deleteItem}
                        />
                    ) : (
                        'No Items To Show '
                    )}
                </Row>
                <Row>
                    <Button variant="primary" type='submit' onClick={onSubmit}>
                        Send invoice
                    </Button>
                </Row>
            </Container>


        </Form>
    )
}

export default AddInvoice
