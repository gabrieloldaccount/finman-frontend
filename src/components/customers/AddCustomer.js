import Form from "react-bootstrap/Form";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Col, Row } from "react-bootstrap";

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

const validateZipcode = (zipCode) => {
  const formatted = zipCode.trim().replace(/[-]/g, "").replaceAll(" ", "");

  if (!hasLetters(formatted) && formatted.length === 5) {
    return true;
  }
  alert("You have entered an invalid zipcode!");
  return false;
};

const validateTelephone = (telephone) => {
  const formatted = telephone
    .toString()
    .trim()
    .replace(/[-]/g, "")
    .replaceAll(" ", "");

  if (!hasLetters(formatted)) return true;

  alert("You have entered an invalid telephone number!");
  return false;
};

const AddCustomer = ({ owner, onAdd }) => {
  const [name, setName] = useState("TestPerson Persson");
  const [address, setAddress] = useState("Hellroad");
  const [zipCode, setZipCode] = useState("54512");
  const [email, setEmail] = useState("hellmail@devil.com");
  const [city, setCity] = useState("Gothenburg");
  const [country, setCountry] = useState("Norway");
  const [telephone, setTelephone] = useState("06535342");

  //TODO: Implement onAdd properly with backend.
  const onSubmit = async (e) => {
    e.preventDefault();

    if (
      validateEmail(email) &&
      validateZipcode(zipCode) &&
      validateTelephone(telephone) &&
      !hasNumber(name) &&
      !hasNumber(country) &&
      !hasNumber(city)
    ) {
      onAdd({
        email: owner,
        customer: {
          name: name,
          address: address,
          zipCode: zipCode,
          city: city,
          country: country,
          telephone: telephone,
          email: email,
        },
      });

      setName("");
      setAddress("");
      setZipCode("");
      setEmail("");
      setTelephone("");
      setCountry("");
      setCity("");
    } else {
      alert("Please fill in the correct input");
    }
  };

  return (
    <div>
      <Row>
        <Col>
          <Form.Label className="invoice-label">Customer Name</Form.Label>
          <Form.Control
            type="string"
            value={name}
            placeholder="Enter customer name"
            onChange={(e) => setName(e.target.value)}
          />

          <Form.Label className="invoice-label">Telephone</Form.Label>
          <Form.Control
            type="number"
            value={telephone}
            placeholder="Enter telephone number"
            onChange={(e) => setTelephone(e.target.value)}
          />

          <Form.Label className="invoice-label">Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            placeholder="Enter Customer Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Col>

        <Col>
          <Form.Label className="invoice-label">Address</Form.Label>
          <Form.Control
            type="string"
            value={address}
            placeholder="Enter address"
            onChange={(e) => setAddress(e.target.value)}
          />

          <Form.Label className="invoice-label">Zipcode</Form.Label>
          <Form.Control
            type="string"
            value={zipCode}
            placeholder="Enter zip code"
            onChange={(e) => setZipCode(e.target.value)}
          />

          <Form.Label className="invoice-label">City</Form.Label>
          <Form.Control
            type="string"
            value={city}
            placeholder="Enter city"
            onChange={(e) => setCity(e.target.value)}
          />

          <Form.Label className="invoice-label">Country</Form.Label>
          <Form.Control
            type="string"
            value={country}
            placeholder="Enter country"
            onChange={(e) => setCountry(e.target.value)}
          />
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
                zipCode &&
                email &&
                country &&
                telephone
              )
            }
            variant="primary"
            type="submit"
            onClick={onSubmit}
            className={"marginBottom"}
          >
            Add Customer
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default AddCustomer;
