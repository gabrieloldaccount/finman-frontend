import {FaTimes, FaPencilAlt} from 'react-icons/fa'

const Product = ({product, onDelete}) => {
    return (
        <tr>
            <td>{product.name}</td>
            <td>{product.price}{'kr/'}{product.unit}</td>
            <td>
            <FaTimes
                style={{color: 'red', cursor: 'pointer', margin: 3}}
                onClick={() => onDelete(product.id)}
            />
            <FaPencilAlt
                style={{cursor: 'pointer', margin: 3}}
            />
            </td>
        </tr>
    );
};

export default Product