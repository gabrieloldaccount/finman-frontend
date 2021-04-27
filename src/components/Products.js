import Product from './Product'
import {Container} from "react-bootstrap";

const Products = ({products, onDelete}) => {
    return (
        <>
            <Container>
            {products.map((product, index) => (
                <Product key={index} product={product} onDelete={onDelete}/>
            ))}
            </Container>
        </>
    )
}

export default Products