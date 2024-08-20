import React from "react";
import "../pages/Dex.css";
import styled from "styled-components";

const Dashboard = ({ travelPokemon }) => {
  const PCard = styled.div`
    display: flex;
    width: 110px;
    height: 200px;
    border: 1px solid black;
    border-radius: 10px;
    margin: 10px;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    font-size: 25px;
  `;

  return (
    <div className="dashboard">
      {travelPokemon.map((pokemon) => {
        return (
          <PCard key={pokemon.id}>
            <img src={pokemon.img_url} alt={pokemon.korean_name} />
            <span>No.{pokemon.id}</span>
            <span>{pokemon.korean_name}</span>
            <button>다음에 여행하기</button>
          </PCard>
        );
      })}
    </div>
  );
};

export default Dashboard;
