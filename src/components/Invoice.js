import { FaTimes } from "react-icons/fa";

const Invoice = ({ invoice, onDelete }) => {
  return (
    <div className={"invoice"}>
      <h3>
        {invoice.customerName}
        {" | "}
        {invoice.customerAddress}
        {" | "}
        {invoice.customerZipCode}
        {" | "}
        {invoice.customerEmail}
        {" | "}
        {invoice.invoiceDate}
        {" | "}
        {invoice.expirationDate}
        {" | "}
        {invoice.bankgiro}
        {" | "}
        {invoice.OCRnumber}

        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(invoice.id)}
        />
      </h3>
      <p>{invoice.day}</p>
    </div>
  );
};

export default Invoice;
