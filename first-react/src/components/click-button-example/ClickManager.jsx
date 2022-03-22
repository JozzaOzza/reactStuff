import { useState } from "react";
import ClickButton from "./ClickButton";
import ClickCounter from "./ClickCounter";

const ClickManager = () => {
    
    const [total, setTotal] = useState(10)
    
    const subtractTotal = () => {
        setTotal(total - 1)
    }

    const alertTotal = () => {
        if (total === 0) {
            alert("The total has reached zero")
            
        }
        
    }

    return ( 
        <>
        <ClickButton subtractTotal={subtractTotal}></ClickButton>
        <ClickCounter total={total} alertTotal={alertTotal}></ClickCounter>
        </>
     );
}
 
export default ClickManager;