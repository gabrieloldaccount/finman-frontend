import { FaTimes } from "react-icons/fa";

const Item = ({ item, onDelete }) => {
  return (
    <div className={"item"}>
      <h3>
        {item.name}
        {" | "}
        {item.price}
        {`kr/${item.unit}  `}
        {" | "}
        {item.quantity}
        {item.unit}{" "}
        <FaTimes
          style={{ color: "red", cursor: "pointer", textAlign: "right" }}
          onClick={() => onDelete(item.id)}
        />
      </h3>
    </div>
  );
};

export default Item;
