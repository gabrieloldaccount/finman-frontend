import InstagramService from "../../services/InstagramService";

const AuthPage = () => {
  const urlParams = new URLSearchParams(window.location.search);

  const code = urlParams.get("code");
  
  if (!localStorage.hasOwnProperty("access_token")) {
    InstagramService.generateShortLivedToken(code);
  }

  const token = localStorage.getItem("access_token");
  console.log("TOKEN: " + token);

  return <div>Temp auth page</div>;
};

export default AuthPage;
