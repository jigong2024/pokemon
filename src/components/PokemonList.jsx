import "../pages/Dex.css";
import PokemonCard from "./PokemonCard";
import PokemonContext from "../context/PokemonContext";
import { useContext } from "react";

const PokemonList = ({ handleTravel }) => {
  const pokemonData = useContext(PokemonContext);

  return (
    <div className="pokemon-list">
      {pokemonData.map((pokemon) => {
        return (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            handleTravel={handleTravel}
          />
        );
      })}
    </div>
  );
};

export default PokemonList;
