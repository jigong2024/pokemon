import React from "react";
import "../pages/Dex.css";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const PCard = styled.div`
  display: flex;
  width: 110px;
  height: 200px;
  /* border: 2px solid black; */

  border-radius: 10px;
  margin: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #e27a4ab3;
  transition: transform 0.3s ease;
  box-shadow: 0 4px 8px rgba(145, 77, 5, 0.621);

  font-size: 25px;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Dashboard = ({ travelPokemon, handleDelete }) => {
  const navigate = useNavigate();

  const goToDetailPage = (pokemonId) => {
    navigate(`/pokemon/${pokemonId}`);
  };

  return (
    <div className="dashboard">
      <h2
        style={{
          marginLeft: "10px",
          minWidth: "76px",
        }}
      >
        나의
        <br />
        포켓몬
      </h2>
      {travelPokemon.map((pokemon) => {
        return (
          <PCard key={pokemon.id} onClick={() => goToDetailPage(pokemon.id)}>
            <img src={pokemon.img_url} alt={pokemon.korean_name} />
            <span>No.{pokemon.id}</span>
            <span>{pokemon.korean_name}</span>
            <button
              className="delete-btn"
              onClick={(e) => {
                e.stopPropagation();
                handleDelete(pokemon.id);
              }}
            >
              다음에 여행하기
            </button>
          </PCard>
        );
      })}
    </div>
  );
};

export default Dashboard;
