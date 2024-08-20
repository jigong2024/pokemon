import React from "react";
import "../pages/Dex.css";
import styled from "styled-components";

const PokemonList = ({ MOCK_DATA }) => {
  const PCard = styled.div`
    display: flex;
    width: 150px;
    height: 200px;
    border: 1px solid black;
    margin-right: 30px;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;
  `;

  return (
    <div className="pokemon-list">
      {MOCK_DATA.map((pokemon) => {
        return (
          <PCard key={pokemon.id}>
            <img src={pokemon.img_url} alt={pokemon.korean_name} />
            <span>{pokemon.id}</span>
            <span>{pokemon.korean_name}</span>
            <button>추가</button>
          </PCard>
        );
      })}
    </div>
  );
};

export default PokemonList;
