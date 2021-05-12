import axios from "axios";

const BASE_URL = "https://api.instagram.com/oauth/access_token";

class InstagramService {
  generateShortLivedToken(clientCode) {
    let formData = new FormData();

    formData.append("client_id", "SECRET_CLIENT_ID");
    formData.append("client_secret", "SECRET_CLIENT_SECRET");
    formData.append("grant_type", "authorization_code");
    formData.append("redirect_uri", "https://localhost:3000/auth/");
    formData.append("code", clientCode);

    return axios({
      url: BASE_URL,
      method: "POST",
      data: formData,
    }).then(
      (res) => {
        console.log("TOKEN RETRIEVED: " + JSON.stringify(res));
        localStorage.setItem("access_token", res.data.access_token);
        localStorage.setItem("access_token", res.data.user_id);
      },
      (err) => {
        console.log("ERROR" + JSON.stringify(err));
      }
    );
  }
}

export default new InstagramService();
