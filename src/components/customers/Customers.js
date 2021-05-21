import { Table } from "react-bootstrap";
import Customer from "./Customer";

//TODO: Implement onDelete in App.js and DB
const Customers = ({ customers, onDelete }) => {
  return (
    <Table striped bordered hover size="sm" variant="dark">
      <thead>
        <tr>
          <th width="300px">Name</th>
          <th width="200px">Telephone</th>
          <th width="300px">Email</th>
          <th width="450px">Address</th>
        </tr>
      </thead>
      <tbody>
        {customers.map((customer, index) => (
          <Customer key={index} customer={customer} onDelete={onDelete} />
        ))}
      </tbody>
    </Table>
  );
};

export default Customers;
