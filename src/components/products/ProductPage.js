import React from "react";
import Products from "./Products";
import Posts from "./Posts";
import { Container, Tabs, Tab } from "react-bootstrap";
import AddProduct from "./AddProduct";
import ReturnButton from "../util/ReturnButton";
import "../../styles/index.css";

const ProductPage = ({ owner, products, onAdd, onDelete }) => {
  return (
    <div>
      <Container className="container">
        <Tabs defaultActiveKey="products" id="product-page-tab">
          <Tab eventKey="products" title="Products">
            <AddProduct owner={owner} onAdd={onAdd} />

            {products.length > 0 ? (
              <Products products={products} onDelete={onDelete} />
            ) : (
              "No Products To Show"
            )}
          </Tab>
          <Tab eventKey="facebook" title="Facebook Posts">
            <Posts />
          </Tab>
        </Tabs>
        <ReturnButton className="returnButton" />
      </Container>
    </div>
  );
};

export default ProductPage;
