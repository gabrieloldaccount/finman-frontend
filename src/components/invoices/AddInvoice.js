import React, { useState } from "react";
import AddItem from "./AddItem";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Col, Container, Row, Tab, Table, Tabs } from "react-bootstrap";
import { number } from "prop-types";
import InvoiceService from "../../services/InvoiceService";
import { pdf } from "@react-pdf/renderer";
import PdfDocument from "../pdf/PdfDocument";
import "../../styles/index.css";
import { FaTimes } from "react-icons/fa";
import InvoicePosts from "./InvoicePosts";

const blobToPdf = (blob, fileName) => {
  blob.lastModifiedDate = new Date();
  blob.name = fileName;
  console.log("SIZE: " + blob.size);
  console.log("TYPE: " + blob.type);
  return blob;
};

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

const AddInvoice = ({ owner, productList }) => {
  const [name, setName] = useState("Dante");
  const [address, setAddress] = useState("Hell District 678");
  const [zipcode, setZipCode] = useState("66666");
  const [email, setEmail] = useState("berti@hotmail.se");
  const [invoiceDate, setInvoiceDate] = useState("2021-04-30");
  const [expirationDate, setExpirationDate] = useState("2021-05-02");
  const [items, setItems] = useState([]);
  const [city, setCity] = useState("Heaven");
  const [country, setCountry] = useState("Hell");
  const [telephone, setTelephone] = useState("7012356671");

  const invoiceData = {
    source: owner,
    invoiceDate: invoiceDate,
    expiryDate: expirationDate,
    seller: "finman@block.chain",
    customer: {
      name: name,
      address: address,
      zipCode: zipcode,
      city: city,
      country: country,
      telephone: telephone,
      email: email,
    },
    items: items,
  };

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
      // Extract pdf
      let pdfBlob = await pdf(<PdfDocument invoice={invoiceData} />).toBlob();
      pdfBlob = blobToPdf(pdfBlob, "invoice.pdf");

      // Create and send Invoice
      InvoiceService.createInvoice(
        invoiceData,
        pdfBlob,
        invoiceData.customer.email
      );

      setName("");
      setAddress("");
      setZipCode("");
      setEmail("");
      setInvoiceDate("");
      setExpirationDate("");
      setTelephone("");
      setCountry("");
      setCity("");
      setItems([]);
    } else {
      alert("Please fill in the correct input");
    }
  };

  //Adds an item to this invoice's items list
  const addItem = (item) => {
    const found = items.find((i) => i.name === item.name);
    if (found === undefined) {
      // If the item doesn't exist then add it to the list
      setItems([...items, item]);
    } else {
      // If the item already exists, sum the amount
      let updatedItems = items.map((i) => {
        if (i.name === item.name)
          i.amount = parseInt(i.amount) + parseInt(item.amount);
        return i;
      });
      setItems([...updatedItems]);
    }
  };

  //Deletes an item from the invoice's items list
  const deleteItem = (name) => {
    setItems(items.filter((item) => item.name !== name));
  };

  const sumOfProducts = (items) => {
    let sum = 0;
    items.forEach((product) => (sum += product.price * product.amount));
    return sum;
  };

  return (
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
              <Form.Label className="invoice-label">Telephone</Form.Label>
              <Form.Control
                type="number"
                value={telephone}
                placeholder="Enter telephone number"
                onChange={(e) => setTelephone(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formInvoiceDate">
              <Form.Label className="invoice-label">Invoice Date</Form.Label>
              <Form.Control
                type="date"
                value={invoiceDate}
                onChange={(e) => setInvoiceDate(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formExpirationDate">
              <Form.Label className="invoice-label">Expiration Date</Form.Label>
              <Form.Control
                type="date"
                value={expirationDate}
                onChange={(e) => setExpirationDate(e.target.value)}
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
        </Row>

        <Tabs defaultActiveKey="products">
          <Tab eventKey="products" title="Products">
            <Row className="row-create-item">
              <AddItem
                owner={owner}
                productList={productList}
                onAddItem={addItem}
              />
            </Row>
          </Tab>

          <Tab eventKey="posts" title="Posts">
            <Row className="row-create-item">
              <InvoicePosts owner={owner} onAddItem={addItem} />
            </Row>
          </Tab>
        </Tabs>

        <Row>
          {items.length > 0 ? (
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Amount</th>
                  <th>Unit Price</th>
                  <th>Price</th>
                  <th>Delete</th>
                </tr>
              </thead>

              <tbody>
                {items.map((item) => (
                  <tr key={item.name}>
                    <td>{item.name}</td>
                    <td>{item.amount}</td>
                    <td>{item.price} kr/st</td>
                    <td>{item.price * item.amount} kr</td>
                    <td>
                      <FaTimes
                        style={{
                          color: "red",
                          cursor: "pointer",
                          margin: 3,
                        }}
                        onClick={() => deleteItem(item.name)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <p className={"invoice-label"}>No Items To Show</p>
          )}
        </Row>
        <Row className="invoice-label">{"Total: " + sumOfProducts(items)}</Row>

        <Row>
          <Button
            disabled={
              !(
                name &&
                city &&
                address &&
                zipcode &&
                email &&
                country &&
                invoiceDate &&
                expirationDate &&
                telephone &&
                items.length !== 0
              )
            }
            variant="primary"
            type="submit"
            onClick={onSubmit}
            className={"marginBottom"}
          >
            Send invoice
          </Button>
        </Row>
      </Form>
    </Container>
  );
};

export default AddInvoice;
