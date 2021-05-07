import React, { Fragment } from "react";
import { StyleSheet, Text } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  billTo: {
    paddingBottom: 8,
    fontFamily: "Helvetica-Oblique",
    textDecoration: "underline",
  },

  invoiceNoContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  invoiceDateContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  invoiceDate: {
    fontSize: 12,
    fontStyle: "bold",
  },
  label: {
    width: 100,
  },
  customBorder: {
    marginTop: "10px",
    padding: "10px",
    borderColor: "#bff0fd",
    borderWidth: 3,
    height: 100,
    width: 250,
    fontStyle: "bold",
    borderStyle: "double",
    borderRadius: "5px",
  },
});

const Prefilled = ({ invoice }) => (
  <Fragment>
    <view style={styles.customBorder}>
      <Text style={styles.billTo}>Pay:</Text>
      <Text>A.Finman AB</Text>
      <Text>Långavägen 10</Text>
      <Text>123 45 Stockholm</Text>
      <Text>Bankgiro: 1234-5678</Text>
    </view>
  </Fragment>
);

export default Prefilled;
