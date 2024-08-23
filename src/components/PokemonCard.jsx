import React from "react";
import "../pages/Dex.css";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addPokemon } from "../store/action";

const PCard = styled.div`
  display: flex;
  width: 130px;
  height: 200px;
  border: 3px solid #ffcb05;
  border-radius: 10px;
  margin: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  background-color: #ffffffdd;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const PokemonCard = ({ pokemon }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goToDetailPage = () => {
    navigate(`/pokemon/${pokemon.id}`);
  };

  return (
    <PCard key={pokemon.id} onClick={goToDetailPage}>
      <img src={pokemon.img_url} alt={pokemon.korean_name} />
      <span>No.{pokemon.id}</span>
      <span>{pokemon.korean_name}</span>
      <button
        className="add-btn"
        onClick={(e) => {
          e.stopPropagation();
          dispatch(addPokemon(pokemon));
        }}
      >
        너로 정했다!
      </button>
    </PCard>
  );
};

export default PokemonCard;
