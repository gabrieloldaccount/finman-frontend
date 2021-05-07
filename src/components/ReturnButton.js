import returnArrow from "../returnArrow.png";
import "../index.css";

const ReturnButton = () => {
  return (
    <a href="/">
      <img src={returnArrow} alt="returnArrow" className={"returnArrow"} />
    </a>
  );
};

export default ReturnButton;
