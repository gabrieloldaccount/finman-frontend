import {Table} from "react-bootstrap";
import Customer from "./Customer"

//TODO: Implement onDelete in App.js and DB
const Customers = ({customers, onDelete}) => {

    return (
        <Table striped bordered hover size="sm" variant="dark">
            <thead>
            <tr>
                <th>Name</th>
                <th>Telephone</th>
                <th>Email</th>
                <th>Address</th>
            </tr>
            </thead>
            <tbody>
            {customers.map((customer, index) => (
                <Customer key={index} customer={customer}/>
            ))}
            </tbody>
        </Table>
    )
}

export default Customers