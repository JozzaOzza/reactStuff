const CoinComp = ({data}) => {
    return ( 

        <>
        
            <h3>{data.name}</h3>
            <h4>Price (In USD): {data.price_usd}</h4>
            <h4>Percentage change (previous day): {data.percent_change_24h}</h4>
            <h5>|</h5>
            <h5>V</h5>
        
        </>

     );
}
 
export default CoinComp;