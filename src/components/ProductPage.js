import React from 'react';
import Products from "./Products";
import {Container, Row} from "react-bootstrap";
import Items from "./Items";

const ProductPage = ({products, onDelete}) => {
    return (
        <Container>
            {products.length > 0 ? (
                <Products products={products} onDelete={onDelete}/>
            ) :
                ('No Products To Show')
            }
        </Container>
    );
};

export default ProductPage;