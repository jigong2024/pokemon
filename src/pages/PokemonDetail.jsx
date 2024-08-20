import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import MOCK_DATA from "../mock";
import "./PokemonDetail.css";

const PokemonDetail = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const { id } = useParams();
  //   console.log(typeof id);
  //   console.log(typeof MOCK_DATA[1].id);
  console.log(MOCK_DATA);
  const pokemon = MOCK_DATA.find((pokemon) => pokemon.id === parseInt(id));

  if (!pokemon) {
    alert("포켓몬을 찾을 수 없습니다!");
  }

  return (
    <div className="detail-container">
      <h1>
        {pokemon.korean_name} (No.{pokemon.id})
      </h1>
      <img src={pokemon.img_url} alt={pokemon.korean_name} />
      <p>타입: {pokemon.types.join(", ")}</p>
      <span>특징: {pokemon.description}</span>
      <button onClick={handleBack}>⬅️ 뒤로가기</button>
    </div>
  );
};

export default PokemonDetail;
