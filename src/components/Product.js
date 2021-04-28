import {FaTimes} from 'react-icons/fa'
import {Container} from "reactstrap";
import {Col, Row} from "react-bootstrap";

const Product = ({product, onDelete}) => {
    return (
        <Row>
            <Col>{product.id}</Col>
            <Col>{product.owner}</Col>
            <Col>{product.name}</Col>
            <Col>{product.price}</Col>
            <Col>{product.unit}</Col>
            <Col><FaTimes
                style={{color: 'red', cursor: 'pointer', textAlign: 'right'}}
                onClick={() => onDelete(product.id)}
            /></Col>
        </Row>
    );
};

export default Product