function InventoryItem(props) {
    return (
        console.log(props),
        <h4 className="inventory-item-name">
            {props.name}
        </h4>,
        <div className="inventory-item-price">
            {props.price}
        </div>
    )
}

export default InventoryItem;