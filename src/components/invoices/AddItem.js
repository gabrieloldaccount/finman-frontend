import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Row, Col } from "react-bootstrap";

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
      amount: amount,
      name: selectedProduct.name,
      price: selectedProduct.price,
    });

    //Resets the internal state.
    setAmount("");
    setSelectedProduct("");
  };

  return (
    <Row md={10} style={{ marginTop: 20, marginBottom: 20 }}>
      <Col md={2}>
        <Dropdown>
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
      </Col>
      <Col md={3}>
        <Form.Group controlId="formQuantity">
          <Form.Control
            type="number"
            placeholder="Enter quantity"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </Form.Group>
      </Col>
      <Col sm={4}>
        <Button
          variant="primary"
          onClick={(e) => addItem(e)}
          disabled={selectedProduct.name ? false : true}
        >
          Add item
        </Button>
      </Col>
    </Row>
  );
};

export default AddItem;
