import Product from './Product'

const Products = ({products, onDelete}) => {
    return (
        <>
            {products.map((product, index) => (
                <Product key={index} product={product} onDelete={onDelete}/>
            ))}
        </>
    )
}

export default Products