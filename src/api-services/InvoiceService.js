import axios from "axios";

const INVOICE_API_BASE_URL = "https://finman-api.herokuapp.com/api/invoices/";

class InvoiceService {
  createInvoice(invoiceData, pdfBlob, email) {
    let formData = new FormData();

    // Convert JSON to File
    const jsn = JSON.stringify(invoiceData);
    const blob = new Blob([jsn], { type: "application/json" });
    console.log("json size: " + blob.size);
    const invoiceFile = new File([blob], "file.json");

    // Append to form data
    formData.append("file", pdfBlob);
    formData.append("to", email);
    formData.append("invoice", invoiceFile);

    axios({
      url: INVOICE_API_BASE_URL,
      method: "POST",
      data: formData,
    }).then(
      (res) => {
        console.log("BIG SUCC" + JSON.stringify(res));
      },
      (err) => {
        console.log("BIG FAIL" + JSON.stringify(err));
      }
    );
  }

  getInvoice(email) {
    return axios.get(INVOICE_API_BASE_URL + email, {
      validateStatus: function (status) {
        return status < 400; // Resolve only if the status code is less than 400
      },
    });
  }
}

export default new InvoiceService();
