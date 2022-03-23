// Exercise - Create a Zoo Component, zoo component contains input fields to create an animal, have state for the animal object
// Use Headers to display the properties of the object
// Stretch goal - Create an animal component, pass the state as props to the animal component, and render in the same way

import { useState } from "react";

const ZooComp = () => {

    const [animal, setAnimal] = useState({})

    let animalObj = {
        type: "cat",
        canFly: false,
        legs: 4,
        petMaterial: false
    }

    const canFlyButton = () => {
        if (animalObj.canFly === true) {
            animalObj.canFly = false
        }
        else {
            animalObj.canFly = true
        }
    }

    const petButton = () => {
        if (animalObj.petMaterial === true) {
            animalObj.petMaterial = false
        }
        else {
            animalObj.petMaterial = true
        }
    }

    return (

        <>
            <form>

                <input type="text" name="type" value={animalObj.type} placeholder="Animal type" onChange={(event) => animalObj.type = event.target.value}/>
                <span> Can it fly</span>
                <input type="radio" name="fly" onChange={() => canFlyButton()} />
                <input type="number" name="legs" placeholder="Number of legs" onChange={(event) => animalObj.legs = event.target.value} />
                <span> Can it be my pet</span>
                <input type="radio" name="pet" onChange={() => petButton()} />
                

                <button type="button" onClick={() => setAnimal(animalObj)}>Click to submit data</button>

            </form>

            <h3> Animal: {animal.type}</h3>
            <h3>It can fly: {`${animal.canFly}`}</h3>
            <h3># of Legs: {animal.legs}</h3>
            <h3>Pet material: {`${animal.petMaterial}`} </h3>
        </>

    );
}

export default ZooComp;