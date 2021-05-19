import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import {Col, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";

const CustomerDropdown = ({ owner, customerList, onAddCustomer}) => {
    const [selectedCustomer, setSelectedCustomer] = useState("");

    const addCustomer = (e) => {
        e.preventDefault();

        onAddCustomer({
            owner: owner,
            customer: {
                name: selectedCustomer.name,
                address: selectedCustomer.address,
                zipCode: selectedCustomer.zipCode,
                city: selectedCustomer.city,
                country: selectedCustomer.country,
                telephone: selectedCustomer.telephone,
                email: selectedCustomer.email,
            },
        });

        setSelectedCustomer("");
    }

    return (
        <Row md={10} style={{ marginTop: 20, marginBottom: 20 }}>
            <Col md={2}>
                <Dropdown>
                    <Dropdown.Toggle variant="primary" id="dropdown-basic">
                        {selectedCustomer === "" ? "Select Customer" : selectedCustomer.name}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>

                            <Dropdown.Item
                                customerList={customerList}
                                onClick={() => setSelectedCustomer(customerList.name)}
                            >
                                Stina
                            </Dropdown.Item>

                    </Dropdown.Menu>
                </Dropdown>
            </Col>

            <Col sm={4}>
                <Button variant="primary" onClick={(e) => addCustomer(e)}>
                    Add Customer
                </Button>
            </Col>
        </Row>
    );
};

export default CustomerDropdown;