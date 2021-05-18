import Form from "react-bootstrap/Form";
import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import {Col, Container, Row} from "react-bootstrap";
import {number} from "prop-types";

const hasNumber = (text) => {
    return /\d/.test(text);
};

const hasLetters = (text) => {
    return /[a-zA-Z]/.test(text);
};

const validateEmail = (email) => {
    if (
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
            email
        )
    ) {
        return true;
    }
    alert("You have entered an invalid email address!");
    return false;
};

const validateZipcode = (zipcode) => {
    const formatted = zipcode.trim().replace(/[-]/g, "").replaceAll(" ", "");

    if (!hasLetters(formatted) && formatted.length === 5) {
        return true;
    }
    alert("You have entered an invalid zipcode!");
    return false;
};

const validateTelephone = (number) => {
    const formatted = number
        .toString()
        .trim()
        .replace(/[-]/g, "")
        .replaceAll(" ", "");

    if (hasLetters(formatted)) return true;

    alert("You have entered an invalid email address!");
    return false;
};

const AddCustomer = ({onAdd}) => {
    const [name, setName] = useState("TestPerson Persson");
    const [address, setAddress] = useState("Hellroad");
    const [zipcode, setZipCode] = useState("54512");
    const [email, setEmail] = useState("hellmail@devil.com");
    const [city, setCity] = useState("Gothenburg");
    const [country, setCountry] = useState("Norway");
    const [telephone, setTelephone] = useState("06535342");

    //TODO: Implement onAdd properly with backend.
    const onSubmit = async (e) => {
        e.preventDefault();

        if (
            validateEmail(email) &&
            validateZipcode(zipcode) &&
            validateTelephone(number) &&
            !hasNumber(name) &&
            !hasNumber(country) &&
            !hasNumber(city)
        ) {
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
        }else {
            alert("Please fill in the correct input");
        }

    }

    return (
        <Container>
            <Row>
                <Col>
                    <Form.Label className="invoice-label">Customer Name</Form.Label>
                    <Form.Control type="string" value={name} placeholder="Enter customer name"
                                  onChange={(e) => setName(e.target.value)}/>

                    <Form.Label className="invoice-label">Telephone</Form.Label>
                    <Form.Control type="number" value={telephone} placeholder="Enter telephone number"
                                  onChange={(e) => setTelephone(e.target.value)}/>

                    <Form.Label className="invoice-label">Email</Form.Label>
                    <Form.Control type="email" value={email} placeholder="Enter Customer Email"
                                  onChange={(e) => setEmail(e.target.value)}/>
                </Col>

                <Col>
                    <Form.Label className="invoice-label">Address</Form.Label>
                    <Form.Control type="string" value={address} placeholder="Enter address"
                                  onChange={(e) => setAddress(e.target.value)}/>

                    <Form.Label className="invoice-label">Zipcode</Form.Label>
                    <Form.Control type="string" value={zipcode} placeholder="Enter zip code"
                                  onChange={(e) => setZipCode(e.target.value)}/>

                    <Form.Label className="invoice-label">City</Form.Label>
                    <Form.Control type="string" value={city} placeholder="Enter city"
                                  onChange={(e) => setCity(e.target.value)}/>

                    <Form.Label className="invoice-label">Country</Form.Label>
                    <Form.Control type="string" value={country} placeholder="Enter country"
                                  onChange={(e) => setCountry(e.target.value)}/>
                </Col>
            </Row>
            <Row>
                <Col md="10">
                    <Button
                        disabled={
                            !(
                                name &&
                                city &&
                                address &&
                                zipcode &&
                                email &&
                                country &&
                                telephone
                            )
                        }
                        variant="primary"
                        type="submit"
                        onClick={onSubmit}
                        className={"marginBottom"}>
                        Add Customer
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}

export default AddCustomer