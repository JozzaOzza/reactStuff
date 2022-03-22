const ClickCounter = ({total}) => {
    
    const theAlert = () => {
        if (total == 0) {
            alert("The total is now zero!")
        }
    }
    
    return ( 
        <>
        <h3>The current total is: {total} </h3>
        
        </>
     );
}
 
export default ClickCounter;