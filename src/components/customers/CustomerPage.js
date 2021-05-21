import React from "react";
import AddCustomer from "./AddCustomer";
import Customers from "./Customers";
import { Container } from "react-bootstrap";

const CustomerPage = ({ owner, customers, onAdd, onDelete }) => {
  return (
    <Container>
      <AddCustomer owner={owner} onAdd={onAdd} />
      <Customers customers={customers} onDelete={onDelete} />
    </Container>
  );
};

export default CustomerPage;
