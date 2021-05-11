import {Table} from "react-bootstrap";
import Customer from "./Customer"

const Customers = ({ customers, onDelete }) => {

    return(
        <Table striped bordered hover size="sm" variant="dark">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Telephone</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th> </th>
                </tr>
            </thead>
            <tbody>
                <Customer/>
            </tbody>
        </Table>
    )
}

export default Customers