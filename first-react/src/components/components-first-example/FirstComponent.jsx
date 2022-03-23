// React components are created as jsx files rather than js 
// jsx allows you to combine HTML and JS seamlessly 

// All of the components should start with a capital letter

// const <Component name> is an arrow function which returns our code

const FirstComponent = () => {
    const name = "Jamie"
    const favColour = "Blue"
    const favNumber = "4"

// Within a Component the only thing that this renders is what it returns
    // A component can only ever return one HTML element
    // Surrounding your elements in a <div> means its only one element 
    // The other solution is <> react fragment, div hell 

    return(
        <>
            
        </>

    )
}

// Export our component as a module, similar to within node 
export default FirstComponent;