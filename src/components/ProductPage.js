import React from 'react';
import Products from "./Products";
import {Container, Row} from "react-bootstrap";
import AddProduct from "./AddProduct";

const ProductPage = ({products, onAdd, onDelete}) => {
    return (
        <Container className="container">
            <AddProduct onAdd={onAdd}/>

            {products.length > 0 ? (
                <Products products={products} onDelete={onDelete}/>
            ) :
                ('No Products To Show')
            }
        </Container>
    );
};

export default ProductPage;