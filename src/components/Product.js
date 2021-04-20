import {FaTimes} from 'react-icons/fa'

const Product = ({product, onDelete}) => {
    return (
        <div className={'product'}
        >
            <h3>
                {product.amount}{' | '}
                {product.unit}{' | '}
                {product.name}{' | '}
                {product.price}{' '}
                <FaTimes
                    style={{color: 'red', cursor: 'pointer', textAlign: 'right'}}
                    onClick={() => onDelete(product.id)}
                />
            </h3>
        </div>
    )
}

export default Product