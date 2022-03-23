const Pokemon = ({ data }) => {



    return (
        <>

            <h2>
                Name: {data.ename}
            </h2>
            <h3>
                Power: {data.power}
            </h3>
            <h3>
                Accuracy: {data.accuracy}
            </h3>

        </>
    );
}

export default Pokemon;