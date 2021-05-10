import { Container, Table } from "react-bootstrap";
import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import PreviewInvoice from "../pdf/PreviewInvoice";
import ReturnButton from "../util/ReturnButton";

const InvoiceList = ({ props, invoiceList }) => {
  const [open, setOpen] = useState(false);
  const [invoice, setInvoice] = useState({
    source: "",
    serialNumber: "",
    vat: "",
    ocr: "",
    invoiceDate: "",
    expiryDate: "",
    bankgiro: "",
    seller: "",
    customer: {
      name: "",
      address: "",
      zipCode: "",
      city: "",
      country: "",
      telephone: "",
      email: "",
    },
    isPaid: "",
    items: [],
  });

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const sumOfProducts = (items) => {
    let sum = 0;
    items.forEach((product) => (sum += product.price * product.amount));
    return sum;
  };

  const loadPreview = (invoice) => {
    setInvoice(invoice);
    onOpenModal();
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={onCloseModal}
        center
        classNames={{
          overlay: "customOverlay",
          modal: "customModal",
        }}
      >
        {open ? (
          <PreviewInvoice invoice={invoice} />
        ) : (
          console.log("PREVIEW_INVOICE HIDDEN")
        )}
      </Modal>
      <Container>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Sent</th>
              <th>Expires</th>
              <th>Status</th>
              <th>Serial Number</th>
              <th>Buyer</th>
              <th>Price</th>
              <th> </th>
            </tr>
          </thead>

          <tbody>
            {invoiceList.map((invoice) => (
              <tr key={invoice.source}>
                <td>{invoice.invoiceDate}</td>
                <td>{invoice.expiryDate}</td>
                <td>PENDING</td>
                <td>{invoice.serialNumber}</td>
                <td>{invoice.customer.name}</td>
                <td>{sumOfProducts(invoice.items)}</td>
                <td>
                  <button
                    className="btn btn-info"
                    onClick={() => loadPreview(invoice)}
                  >
                    Preview
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <ReturnButton className="returnButton" />
      </Container>
    </div>
  );
};

export default InvoiceList;
