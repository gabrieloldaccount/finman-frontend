import ReactDOM from "react-dom";

import { PDFViewer } from "@react-pdf/renderer";
import PdfDocument from "./PdfDocument";

const PreviewInvoice = ({ invoice }) => {
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
        {/* Temporary solution */}
        {invoice !== undefined &&
        invoice.items !== undefined &&
        invoice.items[0] !== undefined ? (
          <PdfDocument invoice={invoice} />
        ) : null}
      </PDFViewer>
    </div>
  );
};

ReactDOM.render(<PreviewInvoice />, document.getElementById("root"));

export default PreviewInvoice;
