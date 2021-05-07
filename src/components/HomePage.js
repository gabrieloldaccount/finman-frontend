import HomePageButton from "./HomePageButton";

const HomePage = ({ props }) => {
  const goToInvoice = () => {
    props.history.push("/NewInvoice");
  };
  const goToCatalog = () => {
    props.history.push("/products");
  };
  const goToAllInvoices = () => {
    props.history.push("/all-invoices");
  };
  //TODO Update when we have a profile page
  const goToProfile = () => {
    props.history.push("/");
  };
  return (
    <container className="homebuttons">
      <HomePageButton
        text1={"create"}
        text2={"new invoice"}
        onClick={goToInvoice}
      />
      <HomePageButton
        text1={"product"}
        text2={"catalog"}
        onClick={goToCatalog}
      />
      <HomePageButton
        text1={"all"}
        text2={"invoices"}
        onClick={goToAllInvoices}
      />
      <HomePageButton text1={"my"} text2={"profile"} onClick={goToProfile} />
    </container>
  );
};

export default HomePage;
