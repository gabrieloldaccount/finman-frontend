import logo from "../../assets/logo.png";
import {
  Document,
  Font,
  Image,
  Page,
  StyleSheet,
  View,
} from "@react-pdf/renderer";
import InvoiceTitle from "./InvoiceTitle";
import InvoiceNo from "./InvoiceNo";
import BillTo from "./BillTo";
import InvoiceItemsTable from "./InvoiceItemsTable";
import Prefilled from "./Prefilled";

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

const PdfDocument = ({ invoice }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View>
          <Image style={styles.logo} src={logo} />
          <InvoiceTitle title="Invoice" />
          <InvoiceNo invoice={invoice} />
          <BillTo invoice={invoice} />
          <InvoiceItemsTable invoice={invoice} />
          <Prefilled invoice={invoice} />
        </View>
      </Page>
    </Document>
  );
};

export default PdfDocument;
