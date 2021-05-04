import Product from './Product'
import {Table} from "react-bootstrap";
import {useEffect, useState} from "react";

const Products = ({products, onDelete}) => {

    return (
            <Table striped bordered hover size="sm" variant="dark">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Delete/Edit</th>
                    </tr>
                </thead>
                <tbody>
                {products.map((product, index) => (
                    <Product key={index} product={product} onDelete={onDelete}/>
                ))}
                </tbody>
            </Table>
    );
}

export default Products