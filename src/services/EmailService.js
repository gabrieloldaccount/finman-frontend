import axios from "axios";

const EMAIL_API_BASE_URL = "https://finman-api.herokuapp.com/api/send-invoice/";

class EmailService {
  sendPdf(blob, email) {
    let formData = new FormData();

    formData.append("file", blob);
    formData.append("to", email);

    axios({
      url: EMAIL_API_BASE_URL,
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
}

export default new EmailService();
