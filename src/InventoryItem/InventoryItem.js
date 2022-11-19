function InventoryItem(props) {
    return (
        <div>
            <h4>
                {props.name}
            </h4>
            <p>
                {props.price}
            </p>
        </div>
    )
}

export default InventoryItem;