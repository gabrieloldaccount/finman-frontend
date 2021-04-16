import Item from './Item'

const Items = ({items, onEdit}) => {
    return (
        <>
            {items.map((item, index) => (
                <Item key={index} item={item} onEdit={onEdit}/>
            ))}
        </>
    )
}

export default Items