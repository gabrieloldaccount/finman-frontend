import React from "react";
import AddCustomer from "./AddCustomer"
import Customers from "./Customers";
import {Container} from "react-bootstrap";

const CustomerPage = ({customers, onAdd, onDelete}) => {

    return (

            <Container>
            <AddCustomer onAdd={onAdd}/>
            <Customers
                customers={customers}
                onDelete={onDelete}
            />
            </Container>

    )
}

export default CustomerPage