import React, { useContext, useState } from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import "./Dex.css";
import { useNavigate } from "react-router-dom";

const Dex = () => {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/");
  };

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
      <img
        src="/public/img/포켓몬스터볼.png"
        alt={"홈으로 돌아가기"}
        onClick={handleHome}
      />
      <Dashboard travelPokemon={travelPokemon} handleDelete={handleDelete} />
      <PokemonList handleTravel={handleTravel} />
    </div>
  );
};

export default Dex;
