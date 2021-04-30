import { Table } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import PreviewInvoice from "./PreviewInvoice";
import "./pdfStyling.css";

const InvoiceList = ({ props, invoiceList }) => {
  const [open, setOpen] = useState(false);
  //const [invoiceId, setInvoiceId] = useState(-1);
  const [invoice, setInvoice] = useState({
    customerName: "",
    customerAddress: "",
    customerZipCode: "",
    customerEmail: "",
    invoiceDate: "",
    expirationDate: "",
    bankgiro: "",
    ocrNumber: "",
    items: [],
    id: "",
  });

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const sumOfProducts = (items) => {
    let sum = 0;
    items.forEach((product) => (sum += product.price * product.quantity));
    return sum;
  };

  const goBackToHomePage = () => {
    props.history.push("/");
  };

  const loadPreview = (invoice) => {
    //setInvoiceId(id);
    setInvoice(invoice);
    onOpenModal();
  };

  return (
    <div>
      <button onClick={onOpenModal}>Open modal</button>
      <Modal
        open={open}
        onClose={onCloseModal}
        center
        classNames={{
          overlay: "customOverlay",
          modal: "customModal",
        }}
      >
        {}
        {open ? (
          <PreviewInvoice invoice={invoice} />
        ) : (
          console.log("PREVIEW_INVOICE HIDDEN")
        )}
      </Modal>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Sent</th>
            <th>Expires</th>
            <th>Status</th>
            <th>Serial Number</th>
            <th>Buyer</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          {invoiceList.map((invoice) => (
            <tr key={invoice.id}>
              <td>{invoice.invoiceDate}</td>
              {/*TODO: Change invoice.expirationDate to invoice.expiryDate when axios is implemented*/}
              <td>{invoice.expirationDate}</td>
              {/*TODO: Add status when backend has it*/}
              <td>PENDING</td>
              <td>{invoice.id}</td>
              <td>{invoice.customerName}</td>
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

      <button onClick={goBackToHomePage} className="btn btn-info">
        Return
      </button>
    </div>
  );
};

export default InvoiceList;
