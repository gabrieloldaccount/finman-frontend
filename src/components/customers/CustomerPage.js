import React from "react";
import AddCustomer from "./AddCustomer"
import Customers from "./Customers";

const CustomerPage = ({customers}) => {

    return (
        <div>
            <AddCustomer/>
            <Customers customers={customers}/>
        </div>
    )
}

export default CustomerPage