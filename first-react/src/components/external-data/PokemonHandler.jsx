import PokeData from "./pokemon-moves.json"

import Pokemon from "./PokemonComp"

const PokemonHandler = () => {



    return (
        <>


            {PokeData.map((move, key) => {
                return (

                    <Pokemon data={move} />

                )
            })}


        </>
    );
}

export default PokemonHandler;