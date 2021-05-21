import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const CustomerDropdown = ({ customerList, onAddCustomer }) => {
  const [selectedCustomer, setSelectedCustomer] = useState("");

  const addCustomer = (e) => {
    e.preventDefault();
    onAddCustomer(selectedCustomer);
  };

  return (
    <Row md={10} style={{ marginTop: 20, marginBottom: 20 }}>
      <Col md={2}>
        <Dropdown>
          <Dropdown.Toggle variant="primary" id="dropdown-basic">
            {selectedCustomer === ""
              ? "Select Customer"
              : selectedCustomer.name}
          </Dropdown.Toggle>

          {/*Lists all the pre-defined customers in the dropdown.*/}
          <Dropdown.Menu>
            {customerList.map((customer, index) => (
              <Dropdown.Item
                key={index}
                onClick={() => setSelectedCustomer(customer)}
              >
                {customer.name}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </Col>
      <Col>
        {/*TODO: Make this instant on selection in dropdown instead.*/}
        <Button
          disabled={selectedCustomer === ""}
          onClick={(e) => addCustomer(e)}
        >
          Use selected customer's info
        </Button>
      </Col>
    </Row>
  );
};

export default CustomerDropdown;
