const BasketComp = ({ basket }) => {

    if (basket.length === 0) {
        return <h2>Add items to your basket</h2>
    } else {
        return (
            <div>
                <ol>

                    {basket.map((item, key) => {
                        return (
                            <li> Item: {item.type}, Quantity: {item.quantity}</li>
                        )
                    })}

                </ol>

            </div>
        )
    }
}

export default BasketComp;