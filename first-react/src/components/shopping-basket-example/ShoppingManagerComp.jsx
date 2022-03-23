import BasketComp from "./BasketComp"
import {useState} from "react"

const ShoppingManager = () => {
    
    const [basket, setBasket] = useState([])

    const [type, setType] = useState("")

    const [quantity, setQuantity] = useState(0)

    let removeNumber;

    const addToBasket = () => {
        setBasket((currentBasket) => {
            return [...currentBasket, {type, quantity}]
        })
        setType("")
        setQuantity(0)
    }

    const removeOneBasket = (num) => {
        setBasket(() => {
            let newBasket = []
            for (let i = 0; i < basket.length; i++) {
                if (i + 1 == num) {

                } else {
                    newBasket.push(basket[i])
                }
            }
            console.log(newBasket)
            return newBasket
        })
        removeNumber = 0
    }

    
    
    return ( 

        <>
        
        <input type="text" name="itemType" value={type} placeholder="Enter an Item name" 
        onChange={(event) => setType(event.target.value)} />
        <input type="number" name="itemQuantity" value={quantity} placeholder="How many are you buying?" 
        onChange={(event) => setQuantity(event.target.value)} />
        <button type="button" name="addButton" onClick={() => addToBasket()}>
            Add to Basket
        </button>
        <input type="number" name="removeField" value={removeNumber} placeholder="ID of Item which you want to remove" 
        onChange={(event) => removeNumber = event.target.value}/>
        <button type="button" name="removeOneButton" onClick={() => removeOneBasket(removeNumber)}>
            Remove an Item
        </button>
        <button type="button" name="removeAllButton" onClick={() => setBasket([])}>
            Remove all Items
        </button>
        <BasketComp basket={basket}></BasketComp>
        </>

     );
}
 
export default ShoppingManager;