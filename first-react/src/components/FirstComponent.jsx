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
            <h1>
                Here is some things about me
            </h1>
            <h2>
                My name is {name}
            </h2>
            <h3>
                My favourite colour is {favColour}    
            </h3>
            <h3>
                My favourite number is {favNumber}
            </h3>
            <h4>
                I also play RL from time to time
            </h4>
            <img src="https://wallpaperaccess.com/full/1335863.jpg" alt="dominus" width='100%'/>  
        </>

    )
}

// Export our component as a module, similar to within node 
export default FirstComponent;