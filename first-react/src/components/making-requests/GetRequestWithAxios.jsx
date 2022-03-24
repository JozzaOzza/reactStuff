import { useEffect, useState } from "react";
import axios from 'axios'

const GetRequest = () => {
    
    const [theData, setTheData] = useState([])

    useEffect(() => {

        axios.get("https://api.coinlore.net/api/global/")
        .then((response) => {

            console.log(response.data)
            setTheData(response.data)

        })

    }, [])
    
    return ( 

        <></>

     );
}
 
export default GetRequest;