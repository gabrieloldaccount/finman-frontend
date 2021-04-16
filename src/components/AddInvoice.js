import {useState} from 'react'
import AddItem from "./AddItem";

const AddInvoice = ({onAddInvoice}) => {
    const [customerName, setCustomerName] = useState('')
    const [customerAddress, setCustomerAddress] = useState('')
    const [customerZipCode, setCustomerZipCode] = useState('')
    const [customerEmail, setCustomerEmail] = useState('')
    const [invoiceDate, setInvoiceDate] = useState('')
    const [expirationDate, setExpirationDate] = useState('')
    const [bankgiro, setBankgiro] = useState('')
    const [OCRnumber, setOCRnumber] = useState('')
    const [items, setItems] = useState([])

    const onSubmit = (e) => {
        e.preventDefault()

        if (!customerName) {
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
            OCRnumber: OCRnumber,
            items: items
        })

        setCustomerName('')
        setCustomerAddress('')
        setCustomerZipCode('')
        setCustomerEmail('')
        setInvoiceDate('')
        setExpirationDate('')
        setBankgiro('')
        setOCRnumber('')
        setItems([])
    }

    const addItem = (item) => {
        setItems([...items, item])
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Customer</label>
                <input
                    type='text'
                    placeholder='Enter Customer Name'
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Address</label>
                <input
                    type='text'
                    placeholder='Enter Customer Address'
                    value={customerAddress}
                    onChange={(e) => setCustomerAddress(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Zip Code</label>
                <input
                    type='text'
                    placeholder='Enter Customer Zip Code'
                    value={customerZipCode}
                    onChange={(e) => setCustomerZipCode(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Customer Email</label>
                <input
                    type='text'
                    placeholder='Enter Customer Email'
                    value={customerEmail}
                    onChange={(e) => setCustomerEmail(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Invoice Date</label>
                <input
                    type='text'
                    placeholder='Enter Invoice Date'
                    value={invoiceDate}
                    onChange={(e) => setInvoiceDate(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Expiration Date</label>
                <input
                    type='text'
                    placeholder='Enter Expiration Date'
                    value={expirationDate}
                    onChange={(e) => setExpirationDate(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Bank-giro</label>
                <input
                    type='text'
                    placeholder='Enter Bank-giro'
                    value={bankgiro}
                    onChange={(e) => setBankgiro(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>OCR number</label>
                <input
                    type='text'
                    placeholder='Enter OCR number'
                    value={OCRnumber}
                    onChange={(e) => setOCRnumber(e.target.value)}
                />
            </div>
            <div className='item-input'>
                <AddItem onAddItem={addItem}/>
            </div>
            <input type='submit' value='Submit invoice' className='btn btn-block'/>
        </form>
    )
}

export default AddInvoice
