import {FaTimes} from "react-icons/fa";

const Customer = ({ customer, onDelete }) => {
    return (

        <div>
            
        </div>
        /*<tr>

            <td>{customer.name}</td>
            <td>{customer.telephone}</td>
            <td>{customer.email}</td>
            <td>{customer.address}</td>
            <td>{customer.zipCode}</td>
            <td>{customer.city}</td>
            <td>{customer.country}</td>
            <td>
                <FaTimes
                    style={{ color: "red", cursor: "pointer", margin: 3 }}
                    onClick={() => onDelete(customer.name)}
                />
            </td>
        </tr>*/
    )
}

export default Customer