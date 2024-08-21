import React, { useContext, useState } from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import "./Dex.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Dex = () => {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/");
  };

  const [travelPokemon, setTravelPokemon] = useState([]);

  const handleTravel = (pokemon) => {
    if (travelPokemon.length >= 6) {
      // alert("최대 6마리의 포켓몬만 여행에 데리고갈 수 있습니다!");
      Swal.fire({
        title: "최대 6마리의 포켓몬만 여행에 데리고갈 수 있습니다!",
        width: 600,
        padding: "3em",
        color: "#716add",
        background: "#fff url(/images/trees.png)",
        backdrop: `
          rgba(0,0,123,0.4)
          url("/images/nyan-cat.gif")
          left top
          no-repeat
        `,
      });
      return;
    }

    const isAlreadyPokemon = travelPokemon.some(
      (travel) => travel.id === pokemon.id
    );

    if (isAlreadyPokemon) {
      // alert("동일한 포켓몬이 존재합니다!");
      Swal.fire({
        icon: "error",
        title: "동일한 포켓몬이 존재합니다...",
        text: "다른 아이를 데려가주세요!",
      });
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
