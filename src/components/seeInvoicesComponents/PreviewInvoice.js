import React, {useEffect, useState} from "react";

import ReactDOM from "react-dom";
import logo from "../../logo.png";

import {Document, Font, Image, Page, PDFViewer, StyleSheet,} from "@react-pdf/renderer";
import InvoiceTitle from "./pdfComponents/InvoiceTitle";
import InvoiceNo from "./pdfComponents/InvoiceNo";
import BillTo from "./pdfComponents/BillTo";
import InvoiceItemsTable from "./pdfComponents/InvoiceItemsTable";

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

const PreviewInvoice = ({invoice}) => {
    const [tempInvoice, setTempInvoice] = useState("");

    useEffect(() => {
        setTempInvoice(invoice);
    }, []);

    /*if (tempInvoice !== undefined && tempInvoice.items !== undefined && tempInvoice.items[0] !== undefined) {
      console.log("DATA 1" + JSON.stringify(tempInvoice));
      console.log("DATA 2" + tempInvoice.customerName);
      console.log("DATA 3" + tempInvoice.items[0].name);
      tempInvoice.items.forEach((item) => console.log(item.name));
    }*/

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
                        {/* Temporary solution */}
                        {tempInvoice !== undefined &&
                        tempInvoice.items !== undefined &&
                        tempInvoice.items[0] !== undefined ? (
                            <div>
                                <Image style={styles.logo} src={logo}/>
                                <InvoiceTitle title="Invoice"/>
                                <InvoiceNo invoice={tempInvoice}/>
                                <BillTo invoice={tempInvoice}/>
                                <InvoiceItemsTable invoice={tempInvoice}/>
                            </div>
                        ) : null}
                    </Page>
                </Document>
            </PDFViewer>
        </div>
    );
};

ReactDOM.render(<PreviewInvoice/>, document.getElementById("root"));

export default PreviewInvoice;
