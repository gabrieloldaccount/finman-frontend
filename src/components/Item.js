import {FaPencilAlt} from 'react-icons/fa'

const Item = ({item, onEdit}) => {
    return (
        <div className={'item'}
        >
            <h3>
                {item.amount}
                {item.unit}
                {item.name}
                {item.price}
                <FaPencilAlt
                    style={{color: 'white', cursor: 'pointer', textAlign: 'right'}}
                    onClick={() => onEdit(item.id)}
                />
            </h3>
        </div>
    )
}

export default Item