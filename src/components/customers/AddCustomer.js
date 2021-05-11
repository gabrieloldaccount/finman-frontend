import Form from "react-bootstrap/Form";
import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import { Col, Container, Row, Table } from "react-bootstrap";


const AddCustomer = ({ onAdd }) => {
    const [name, setName] = useState("TestPerson Persson");
    const [address, setAddress] = useState("Hellroad");
    const [zipcode, setZipCode] = useState("54512");
    const [email, setEmail] = useState("hellmail@devil.com");
    const [city, setCity] = useState("Gothenburg");
    const [country, setCountry] = useState("Norway");
    const [telephone, setTelephone] = useState("06535342");

    const onSubmit = async (e) => {
        e.preventDefault();

            onAdd({
                customer: {
                    name: name,
                    address: address,
                    zipCode: zipcode,
                    city: city,
                    country: country,
                    telephone: telephone,
                    email: email,
                },
            })

            setName("");
            setAddress("");
            setZipCode("");
            setEmail("");
            setTelephone("");
            setCountry("");
            setCity("");
    }

    return(
        <Container>
            <Form>
                <Row>
                    <Col>
                        <Form.Group controlId="formCustomerName">
                            <Form.Label className="invoice-label">Customer Name</Form.Label>
                            <Form.Control
                                type="string"
                                value={name}
                                placeholder="Enter customer name"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="formCustomerEmail">
                            <Form.Label className="invoice-label">Telephone</Form.Label>
                            <Form.Control
                                type="number"
                                value={telephone}
                                placeholder="Enter telephone number"
                                onChange={(e) => setTelephone(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="formCustomerEmail">
                            <Form.Label className="invoice-label">Email</Form.Label>
                            <Form.Control
                                type="email"
                                value={email}
                                placeholder="Enter Customer Email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>

                    </Col>
                    <Col>

                        <Form.Group controlId="formCustomerEmail">
                            <Form.Label className="invoice-label">Address</Form.Label>
                            <Form.Control
                                type="string"
                                value={address}
                                placeholder="Enter address"
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="formCustomerEmail">
                            <Form.Label className="invoice-label">Zipcode</Form.Label>
                            <Form.Control
                                type="string"
                                value={zipcode}
                                placeholder="Enter zip code"
                                onChange={(e) => setZipCode(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="formCustomerEmail">
                            <Form.Label className="invoice-label">City</Form.Label>
                            <Form.Control
                                type="string"
                                value={city}
                                placeholder="Enter city"
                                onChange={(e) => setCity(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="formCustomerEmail">
                            <Form.Label className="invoice-label">Country</Form.Label>
                            <Form.Control
                                type="string"
                                value={country}
                                placeholder="Enter country"
                                onChange={(e) => setCountry(e.target.value)}
                            />
                        </Form.Group>

                    </Col>
                </Row>
                <Row>
                    <Button
                    variant="primary"
                    type="submit"
                    onClick={onSubmit}
                    className={"marginBottom"}>
                        Add Customer
                    </Button>
                </Row>
            </Form>
        </Container>
    )
}

export default AddCustomer