import {FaTimes} from 'react-icons/fa'

const Item = ({item, onDelete}) => {
    return (
        <div className={'item'}
        >
            <h3>
                {item.amount}{' | '}
                {item.unit}{' | '}
                {item.name}{' | '}
                {item.price}{' '}
                <FaTimes
                    style={{color: 'red', cursor: 'pointer', textAlign: 'right'}}
                    onClick={() => onDelete(item.id)}
                />
            </h3>
        </div>
    )
}

export default Item