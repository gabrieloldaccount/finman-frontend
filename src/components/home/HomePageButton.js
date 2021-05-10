import "../../styles/HomePageButton.css";

const HomePageButton = ({ text1, text2, onClick }) => {
  return (
    <button onClick={onClick} className="homepagebutton">
      <span className="bigpart">{text1}</span>
      <span className="smallpart">{text2}</span>
    </button>
  );
};

export default HomePageButton;
