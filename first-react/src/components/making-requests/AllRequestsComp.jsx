import axios from "axios";
import { useState } from "react";

const AllRequests = () => {

    const [data, setData] = useState([])

    const [personName, setPersonName] = useState("")

    const [personJob, setPersonJob] = useState("")

    const [personId, setPersonId] = useState(0)

    // Name and job will be contained within an object so we need to find a way of adding them both to the same object
    const [personObject, setPersonObject] = useState({})

    const makePersonObject = (event) => {

        const {name, value} = event.target
        
        setPersonObject((existingValues) => ({
            ... existingValues, [name]: value
        }))

    }

    const createPerson = () => {

        axios.post("https://reqres.in/api/users", personObject)
        .then((response) => {
            console.log(response)
        })

    }

    const updatePerson = () => {

        axios.put(`https://reqres.in/api/users/${personId}`, personObject)
        .then((response) => {
            console.log(response)
        })
    }

    return (
        <>

            <h2>
                Create a new person here!
                <input type="text" name="name" placeholder="Enter their name" value={personObject.name} 
                onChange={(event) => makePersonObject(event)}/>
                <input type="text" name="job" placeholder="Enter their job title" value={personJob.job} 
                onChange={(event) => makePersonObject(event)}/>
                Click this to submit -->
                <button type="button" onClick={() => createPerson()}>Submit</button> 
            </h2>
            <br />
            <h2>
                Update an existing person's details here!
                <input type="number" placeholder="Enter their id" value={personId}
                onChange={(event) => setPersonId(event.target.value)} />
                <input type="text" placeholder="Enter their name" value={personObject.name} 
                onChange={(event) => makePersonObject(event)}/>
                <input type="text" placeholder="Enter their job title" value={personJob.job} 
                onChange={(event) => makePersonObject(event)}/>
                Click this to submit -->
                <button type="button" onClick={() => updatePerson()}>Submit</button>
            </h2>

        </>
    );
}

export default AllRequests;