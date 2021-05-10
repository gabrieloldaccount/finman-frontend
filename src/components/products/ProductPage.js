import React from "react";
import Products from "./Products";
import { Container } from "react-bootstrap";
import AddProduct from "./AddProduct";
import ReturnButton from "../util/ReturnButton";
import "../../styles/index.css";

const ProductPage = ({ owner, products, onAdd, onDelete }) => {
  return (
    <div>
      <Container className="container">
        <AddProduct owner={owner} onAdd={onAdd} />

        {products.length > 0 ? (
          <Products products={products} onDelete={onDelete} />
        ) : (
          "No Products To Show"
        )}
        <ReturnButton className="returnButton" />
      </Container>
    </div>
  );
};

export default ProductPage;
