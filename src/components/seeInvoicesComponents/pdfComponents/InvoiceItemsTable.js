import React from "react";
import { StyleSheet, View } from "@react-pdf/renderer";
import InvoiceTableHeader from "./TableItems/InvoiceTableHeader.js";
import InvoiceTableRow from "./TableItems/InvoiceTableRow";
import InvoiceTableBlankSpace from "./TableItems/InvoiceTableBlankSpace";
import InvoiceTableFooter from "./TableItems/InvoiceTableFooter";
import InvoiceTableMoms from "./TableItems/InvoiceTableMoms";

const tableRowsCount = 11;

const styles = StyleSheet.create({
  tableContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 24,
    borderWidth: 2.5,
    borderColor: "#bff0fd",
  },
});

const InvoiceItemsTable = ({ invoice }) => (
  <View style={styles.tableContainer}>
    <InvoiceTableHeader />
    <InvoiceTableRow items={invoice.items} />
    <InvoiceTableBlankSpace rowsCount={tableRowsCount - invoice.items.length} />
    <InvoiceTableMoms items={invoice.items} />
    <InvoiceTableFooter items={invoice.items} />
  </View>
);

export default InvoiceItemsTable;
