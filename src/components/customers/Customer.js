import {FaTimes} from "react-icons/fa";
import React from "react";

const Customer = ({ customer, onDelete }) => {
    return (
        <tr>
            <td>{customer.name}</td>
            <td>{customer.telephone}</td>
            <td>{customer.email}</td>
            <td>{customer.address}{", "}
                {customer.zipCode}{", "}
                {customer.city}{", "}
                {customer.country}</td>

            <FaTimes
                style={{color: "red", cursor: "pointer", margin: 3, width: "30px", height: "30px"}}
                onClick={() => onDelete(customer.name)}
            />
        </tr>
    )
}

export default Customer