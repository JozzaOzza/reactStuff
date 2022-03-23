import PokeData from "./pokemon-moves.json"

import Pokemon from "./PokemonComp"

const PokemonHandler = () => {



    return (
        <>
            <ol>

            {PokeData.map((move, key) => {
                return (
                   <li>
                       <Pokemon data={move} />
                   </li> 
                )
            })}

            </ol>
        </>
    );
}

export default PokemonHandler;