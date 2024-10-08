import "../pages/Dex.css";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { pokemonActions } from "../store/pokemonSlice";

const Dashboard = ({ travelPokemon }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goToDetailPage = (pokemonId) => {
    navigate(`/pokemon/${pokemonId}`);
  };

  return (
    <div className="dashboard">
      <h2>
        나의
        <br />
        포켓몬
      </h2>
      {travelPokemon.map((pokemon) => {
        return (
          <Pcard key={pokemon.id} onClick={() => goToDetailPage(pokemon.id)}>
            <img src={pokemon.img_url} alt={pokemon.korean_name} />
            <span>No.{pokemon.id}</span>
            <span>{pokemon.korean_name}</span>
            <button
              className="delete-btn"
              onClick={(e) => {
                e.stopPropagation();
                dispatch(pokemonActions.deletePokemon(pokemon.id));
              }}
            >
              다음에 여행하기
            </button>
          </Pcard>
        );
      })}
    </div>
  );
};

export default Dashboard;

const Pcard = styled.div`
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
