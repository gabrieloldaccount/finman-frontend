import {FaTimes} from "react-icons/fa";

const Customer = ({ customer, onDelete }) => {
    return (
        <tr>
            <td>{customer.name}</td>
            <td>{customer.telephone}</td>
            <td>{customer.email}</td>
            <td>{customer.address}{customer.zipcode}{customer.city}{customer.country}</td>
            <td>
                <FaTimes
                    style={{color: "red", cursor: "pointer", margin: 3}}
                    onClick={() => onDelete(customer.name)}
                />
            </td>
        </tr>
    )
}

export default Customer