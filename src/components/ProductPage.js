import React from "react";
import Products from "./Products";
import { Container } from "react-bootstrap";
import AddProduct from "./AddProduct";

const ProductPage = ({ owner, products, onAdd, onDelete }) => {
  return (
    <Container className="container">
      <AddProduct owner={owner} onAdd={onAdd} />

      {products.length > 0 ? (
        <Products products={products} onDelete={onDelete} />
      ) : (
        "No Products To Show"
      )}
    </Container>
  );
};

export default ProductPage;
