import React from "react";
import AddCustomer from "./AddCustomer"
import Customers from "./Customers";

const CustomerPage = ({customers, onAdd, onDelete}) => {

    return (
        <div>
            <AddCustomer onAdd={onAdd}/>
            <Customers
                customers={customers}
                onDelete={onDelete}
            />
        </div>
    )
}

export default CustomerPage