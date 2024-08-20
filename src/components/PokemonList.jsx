import React from "react";
import "../pages/Dex.css";
import styled from "styled-components";

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

const PokemonList = ({ MOCK_DATA, handleTravel }) => {
  return (
    <div className="pokemon-list">
      {MOCK_DATA.map((pokemon) => {
        return (
          <PCard key={pokemon.id}>
            <img src={pokemon.img_url} alt={pokemon.korean_name} />
            <span>No.{pokemon.id}</span>
            <span>{pokemon.korean_name}</span>
            <button onClick={() => handleTravel(pokemon)}>같이 여행하기</button>
          </PCard>
        );
      })}
    </div>
  );
};

export default PokemonList;
