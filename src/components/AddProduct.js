import React, { useState } from "react";

import { Button } from "react-bootstrap";
import "../index.css";

const AddProduct = ({ owner, onAdd }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    onAdd({
      owner: owner,
      name: name,
      price: price,
    });

    //Reset local state
    setName("");
    setPrice("");
  };

  return (
    <div>
      <input
        className={"addItem"}
        type="text"
        value={name}
        placeholder="Enter Product Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className={"addItem"}
        type="number"
        value={price}
        placeholder="Enter Product Price"
        onChange={(e) => setPrice(e.target.value)}
      />
      <Button variant="primary" onClick={onSubmit}>
        Add product
      </Button>
    </div>
  );
};

export default AddProduct;
