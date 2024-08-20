import React, { useState } from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import "./Dex.css";
import MOCK_DATA from "../mock";

const Dex = () => {
  //   console.log(MOCK_DATA);
  const [travelPokemon, setTravelPokemon] = useState([]);

  const handleTravel = (pokemon) => {
    if (travelPokemon.length >= 6) {
      alert("최대 6마리의 포켓몬만 여행에 데리고갈 수 있습니다!");
      return;
    }

    const isAlreadyPokemon = travelPokemon.some(
      (travel) => travel.id === pokemon.id
    );

    if (isAlreadyPokemon) {
      alert("동일한 포켓몬이 존재합니다!");
    } else {
      setTravelPokemon([...travelPokemon, pokemon]);
    }
  };

  const handleDelete = (id) => {
    const newPokemon = travelPokemon.filter((pokemon) => {
      return pokemon.id !== id;
    });

    setTravelPokemon(newPokemon);
  };

  return (
    <div className="dex-page">
      <Dashboard travelPokemon={travelPokemon} handleDelete={handleDelete} />
      <PokemonList MOCK_DATA={MOCK_DATA} handleTravel={handleTravel} />
    </div>
  );
};

export default Dex;
