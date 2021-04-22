import {FaTimes} from 'react-icons/fa'

const Product = ({product, onDelete}) => {
    return (
        <div className={'product'}
        >
            <h3>
                {product.id}{' | '}
                {product.owner}{' | '}
                {product.name}{' | '}
                {product.price}{' | '}
                {product.unit}{' '}
                <FaTimes
                    style={{color: 'red', cursor: 'pointer', textAlign: 'right'}}
                    onClick={() => onDelete(product.id)}
                />
            </h3>
        </div>
    )
}

export default Product