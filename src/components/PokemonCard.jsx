import "../pages/Dex.css";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const PokemonCard = ({ pokemon, handleTravel }) => {
  const navigate = useNavigate();

  const goToDetailPage = () => {
    navigate(`/pokemon/${pokemon.id}`);
  };

  return (
    <Pcard key={pokemon.id} onClick={goToDetailPage}>
      <img src={pokemon.img_url} alt={pokemon.korean_name} />
      <span>No.{pokemon.id}</span>
      <span>{pokemon.korean_name}</span>
      <button
        className="add-btn"
        onClick={(e) => {
          e.stopPropagation();
          handleTravel(pokemon);
        }}
      >
        너로 정했다!
      </button>
    </Pcard>
  );
};

export default PokemonCard;

const Pcard = styled.div`
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
