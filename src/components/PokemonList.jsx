import React from "react";
import "../pages/Dex.css";
import PokemonCard from "./PokemonCard";

const PokemonList = ({ MOCK_DATA, handleTravel }) => {
  return (
    <div className="pokemon-list">
      {MOCK_DATA.map((pokemon) => {
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
