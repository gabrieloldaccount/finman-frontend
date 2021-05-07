import { FaTimes } from "react-icons/fa";

const Product = ({ product, onDelete }) => {
  return (
    <tr>
      <td>{product.name}</td>
      <td>
        {product.price}
        {"kr/st"}
      </td>
      <td>
        <FaTimes
          style={{ color: "red", cursor: "pointer", margin: 3 }}
          onClick={() => onDelete(product.name)}
        />
        {/*            Implement this EDIT funcitons later.
                <FaPencilAlt
                style={{cursor: 'pointer', margin: 3}}
            />*/}
      </td>
    </tr>
  );
};

export default Product;
