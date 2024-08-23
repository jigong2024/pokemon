import React, { useContext } from "react";
import "../pages/Dex.css";
import PokemonCard from "./PokemonCard";
import PokemonContext from "../context/PokemonContext";

const PokemonList = () => {
  const pokemonData = useContext(PokemonContext);

  return (
    <div className="pokemon-list">
      {pokemonData.map((pokemon) => {
        return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
      })}
    </div>
  );
};

export default PokemonList;
