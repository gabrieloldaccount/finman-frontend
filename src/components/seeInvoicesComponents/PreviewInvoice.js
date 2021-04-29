import React, { useEffect, useState } from "react";

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

const invoice1 = {
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

// Will crash if len(invoice.items) == 0
const PreviewInvoice = ({ invoiceId }) => {
  const [tempInvoice, setTempInvoice] = useState({});

  // Fetch a specific Invoice
  const fetchInvoice = async (id) => {
    if (id === -1) return;
    const res = await fetch(`http://localhost:5000/invoices/${id}`);
    const data = await res.json();

    console.log("DATA > " + JSON.stringify(data));
    console.log("ADDRESS > " + data.customerAddress);
    console.log("NAME > " + data.customerName);
    console.log("ITEMS > " + JSON.stringify(data.items));

    if (data.items !== undefined) {
      console.log("ITEM NAME [0] > " + data.items[0].name);
      data.items.forEach((item) => console.log(item.name));
    }

    setTempInvoice(data);
    return data;
  };

  useEffect(() => {
    fetchInvoice(invoiceId);
  }, []);

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
            {tempInvoice.items !== undefined ? (
              <div>
                <Image style={styles.logo} src={logo} />
                <InvoiceTitle title="Invoice" />
                <InvoiceNo invoice={tempInvoice} />
                <BillTo invoice={tempInvoice} />
                <InvoiceItemsTable invoice={invoice1} />
              </div>
            ) : null}
          </Page>
        </Document>
      </PDFViewer>
    </div>
  );
};

ReactDOM.render(<PreviewInvoice />, document.getElementById("root"));

export default PreviewInvoice;
