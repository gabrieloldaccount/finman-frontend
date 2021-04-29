import React, {useState} from "react";
import ReactDOM from "react-dom";
import logo from "../../logo.png";

import {
  Page,
  Document,
  Text,
  StyleSheet,
  PDFViewer,
  Font,
  Image,
  View,
} from "@react-pdf/renderer";
import InvoiceTitle from "./pdfComponents/InvoiceTitle";
import InvoiceNo from "./pdfComponents/InvoiceNo";
import BillTo from "./pdfComponents/BillTo";
import InvoiceItemsTable from "./pdfComponents/InvoiceItemsTable2";

const invoice = {
  items: [
    {
      sno: 1,
      desc: "ad sunt culpa occaecat qui",
      qty: 5,
      rate: 405.89,
    },
    {
      sno: 2,
      desc: "cillum quis sunt qui aute",
      qty: 5,
      rate: 373.11,
    },
    {
      sno: 3,
      desc: "ea commodo labore culpa irure",
      qty: 5,
      rate: 458.61,
    },
    {
      sno: 4,
      desc: "nisi consequat et adipisicing dolor",
      qty: 10,
      rate: 725.24,
    },
    {
      sno: 5,
      desc: "proident cillum anim elit esse",
      qty: 4,
      rate: 141.02,
    },
  ],
};

Font.register({
  family: "Oswald",
  src: "https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf",
});

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 11,
    paddingTop: 30,
    paddingLeft: 60,
    paddingRight: 60,
    lineHeight: 1.5,
    flexDirection: "column",
  },
  logo: {
    width: 74,
    height: 66,
    marginLeft: "auto",
    marginRight: "auto",
  },
});

const PreviewInvoice = (props) => {
    /* TODO: You can now access the the the invoice details through props.
        i.e <div>CUSTOMER NAME: {props.customerName}</div>
            <div>CUSTOMER EMAIL: {props.customerEmail}</div>
    */
  return (
    <div>
      <PDFViewer
        style={{
          minHeight: "800px",
          minWidth: "800px",
          height: "99%",
          width: "100%",
          border: "0px",
          display: "flex",
          overflow: "hidden",
        }}
      >
        <Document>
          <Page size="A4" style={styles.page}>
            <Image style={styles.logo} src={logo} />
            <InvoiceTitle title="Invoice" />
            <InvoiceNo invoice={props} />
            <BillTo invoice={props} />
            <InvoiceItemsTable invoice={invoice} />
          </Page>
        </Document>
      </PDFViewer>
    </div>
  );
};

ReactDOM.render(<PreviewInvoice />, document.getElementById("root"));

export default PreviewInvoice;
