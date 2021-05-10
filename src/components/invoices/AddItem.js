import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Row } from "react-bootstrap";

const AddItem = ({ owner, productList, onAddItem }) => {
  const [selectedProduct, setSelectedProduct] = useState("");
  const [amount, setAmount] = useState("");

  //The submit method for AddItems. Checks, submits and resets the internal state.
  const addItem = (e) => {
    e.preventDefault();

    //Input checking.
    if (!amount || amount < 0) {
      alert("Please add an amount of items");
      return;
    }

    //Passes values to AddInvoice where state is handled.
    onAddItem({
      owner: owner,
      amount: amount,
      name: selectedProduct.name,
      price: selectedProduct.price,
    });

    //Resets the internal state.
    setAmount("");
    setSelectedProduct("");
  };

  return (
      <Row>
        <Dropdown className={"addItem"}>
          <Dropdown.Toggle variant="primary" id="dropdown-basic">
            {selectedProduct === "" ? "Select Product" : selectedProduct.name}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {productList.map((product, index) => (
              <Dropdown.Item
                key={product.name}
                onClick={() => setSelectedProduct(product)}
              >
                {product.name}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        <Form.Group className={"addItem"} controlId="formQuantity">
          <Form.Control
            type="number"
            placeholder="Enter quantity"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" onClick={(e) => addItem(e)}>
          Add item
        </Button>
      </Row>
  );
};

export default AddItem;