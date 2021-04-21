import {useState} from 'react'
import Products from './Products'
import Product from './Product';

//TODO: Add proper CSS formatting in index.css
const AddItem = ({onAddItem}) => {
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

    //const ProductSelect = Select.ofType<Product>();

    return (
        <div className='add-form'>
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

            {/* Temporary out for testing. <Button onClick={addItem} text='Add item'  className='btn btn-block'/>
            */}
        </div>
    )
}

export default AddItem