import { useState } from "react";
import AddItem from "./AddItem";
import Items from "./Items";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Col, Container, Row } from "react-bootstrap";
import EmailService from "../api-services/EmailService";
import { pdf } from "@react-pdf/renderer";
import PdfDocument from "./seeInvoicesComponents/pdfComponents/PdfDocument";

const blobToPdf = (blob, fileName) => {
  blob.lastModifiedDate = new Date();
  blob.name = fileName;
  console.log("SIZE: " + blob.size);
  console.log("TYPE: " + blob.type);
  return blob;
};

const AddInvoice = ({ owner, productList, onAddInvoice }) => {
  const [name, setName] = useState("TestPerson Persson");
  const [address, setAddress] = useState("Hellroad");
  const [zipcode, setZipCode] = useState("54512");
  const [email, setEmail] = useState("hellmail@devil.com");
  const [invoiceDate, setInvoiceDate] = useState("2021-04-30");
  const [expirationDate, setExpirationDate] = useState("2021-05-02");
  const [items, setItems] = useState([]);
  const [city, setCity] = useState("Gothenburg");
  const [country, setCountry] = useState("Norway");
  const [telephone, setTelephone] = useState("06535342");

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

    //TODO: Add more error-checking here.
    if (!name && !city) {
      alert("Please fill in all info for the invoice");
      return;
    }

    // Send JSON data
    onAddInvoice(invoiceData);
    // Send pdf
    let blob = await pdf(<PdfDocument invoice={invoiceData} />).toBlob();
    blob = blobToPdf(blob, "invoice.pdf");
    EmailService.sendPdf(blob, invoiceData.customer.email);

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
  };

  //Adds an item to this invoice's items list
  const addItem = (item) => {
    setItems([...items, item]);
  };

  //Deletes an item from the invoice's items list
  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const sumOfProducts = (items) => {
    let sum = 0;
    items.forEach((product) => (sum += product.price * product.amount));
    return sum;
  };

  return (
    <Container>
      {/*TODO: Format this whole Form-thing into just plain stuff instead. Don't think we gain anything from the form format.*/}
      <Form>
        <Row>
          <Col>
            <Form.Group controlId="formCustomerName">
              <Form.Label>Customer Name</Form.Label>
              <Form.Control
                type="string"
                value={name}
                placeholder="Enter customer name"
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formCustomerEmail">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="string"
                value={address}
                placeholder="Enter address"
                onChange={(e) => setAddress(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formCustomerEmail">
              <Form.Label>Zipcode</Form.Label>
              <Form.Control
                type="number"
                value={zipcode}
                placeholder="Enter zip code"
                onChange={(e) => setZipCode(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formCustomerEmail">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="string"
                value={city}
                placeholder="Enter city"
                onChange={(e) => setCity(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formCustomerEmail">
              <Form.Label>Telephone</Form.Label>
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
              <Form.Label>Invoice Date</Form.Label>
              <Form.Control
                type="date"
                value={invoiceDate}
                onChange={(e) => setInvoiceDate(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formExpirationDate">
              <Form.Label>Expiration Date</Form.Label>
              <Form.Control
                type="date"
                value={expirationDate}
                onChange={(e) => setExpirationDate(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formCustomerEmail">
              <Form.Label>Country</Form.Label>
              <Form.Control
                type="string"
                value={country}
                placeholder="Enter country"
                onChange={(e) => setCountry(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formCustomerEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                placeholder="Enter Customer Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="row-create-item">
          <AddItem
            owner={owner}
            productList={productList}
            onAddItem={addItem}
          />
        </Row>
        <Row>
          {items.length > 0 ? (
            <Items items={items} onDelete={deleteItem} />
          ) : (
            "No Items To Show "
          )}
        </Row>

        <Row>{"Total: " + sumOfProducts(items)}</Row>

        <Row>
          <Button variant="primary" type="submit" onClick={onSubmit}>
            Send invoice
          </Button>
        </Row>
      </Form>
    </Container>
  );
};

export default AddInvoice;
