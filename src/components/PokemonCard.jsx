import React from "react";
import "../pages/Dex.css";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const PCard = styled.div`
  display: flex;
  width: 130px;
  height: 200px;
  border: 1px solid black;
  border-radius: 10px;
  margin: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 25px;
`;

const PokemonCard = ({ pokemon, handleTravel }) => {
  const navigate = useNavigate();

  const goToDetailPage = () => {
    navigate(`/pokemon/${pokemon.id}`);
  };

  return (
    <PCard key={pokemon.id} onClick={goToDetailPage}>
      <img src={pokemon.img_url} alt={pokemon.korean_name} />
      <span>No.{pokemon.id}</span>
      <span>{pokemon.korean_name}</span>
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleTravel(pokemon);
        }}
      >
        같이 여행하기
      </button>
    </PCard>
  );
};

export default PokemonCard;
