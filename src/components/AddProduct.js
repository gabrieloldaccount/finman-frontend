import React, { useState } from "react";

import { Button } from "react-bootstrap";

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
    <>
      <input
        type="text"
        value={name}
        placeholder="Enter Product Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        value={price}
        placeholder="Enter Product Price"
        onChange={(e) => setPrice(e.target.value)}
      />
      <Button variant="primary" onClick={onSubmit}>
        Add product
      </Button>
    </>
  );
};

export default AddProduct;
