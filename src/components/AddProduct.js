import React, {useState} from 'react';

import {Container, Form, Button} from "react-bootstrap";

const AddProduct = ({onAdd}) => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [unit, setUnit] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        //TODO: Add auto-fill of all 'under the hood' stuff like owner, id etc.
        onAdd({
            name: name,
            price: price,
            unit: unit
        })

        //Reset local state
        setName('')
        setPrice('')
        setUnit('')
    }

    return (
        <>
            <input
                type="text" value={name}
                placeholder="Enter Product Name"
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="number"
                value={price}
                placeholder="Enter Product Price"
                onChange={(e) => setPrice(e.target.value)}
            />
            <input
                type="text" value={unit}
                placeholder="Enter Product Unit Type"
                onChange={(e) => setUnit(e.target.value)}
            />
            <Button variant="primary" onClick={onSubmit}>Add product</Button>
        </>
    );
}

export default AddProduct;
