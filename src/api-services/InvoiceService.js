import axios from "axios";

const INVOICE_API_BASE_URL = "https://finman-api.herokuapp.com/api/invoices/";

class InvoiceService {
  createInvoice(invoice) {
    return axios.post(INVOICE_API_BASE_URL, invoice);
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
