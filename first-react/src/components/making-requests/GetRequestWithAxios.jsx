import { useEffect, useState } from "react";
import axios from 'axios'
import CoinComp from "./CoinComp";

const GetRequest = () => {

    const [theData, setTheData] = useState([])

    const [startNum, setStartNum] = useState(0)

    const [rangeNum, setRangeNum] = useState(0)

    useEffect(() => {

        if (startNum - 1 >= 0 && rangeNum <=100 && rangeNum > 0) {
            axios.get(`https://api.coinlore.net/api/tickers/?start=${startNum - 1}&limit=${rangeNum}`)
            .then((response) => {

                console.log(response.data.data)
                setTheData(response.data.data)

            })
        }

        

    }, [startNum, rangeNum])

    return (

        <>

            <h3>
                Coins are ordered by total market capitalisation
            </h3>
            <h3>
                Use this to choose the start point for your search. <br />
                For example, inputting '2' would start the search at the coin with the second highest market cap. <br />
                <input type="number" value={startNum} onChange={(e) => setStartNum(e.target.value)} /> <br />
                Use this to choose the length of your search. <br /> 
                For example, inputting '50' would return the next 50 coins from the start point of your search. <br />
                <input type="number" value={rangeNum} onChange={(e) => setRangeNum(e.target.value)}/>
            </h3>


            {theData.map((coin, key) => {

                return <CoinComp data={coin} key={key} />

            })}

        </>

    );
}

export default GetRequest;