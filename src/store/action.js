// action type 정의
export const ADD_POKEMON = "ADD_POKEMON";
export const DELETE_POKEMON = "DELETE_POKEMON";
export const GET_POKEMON_LIST = "GET_POKEMON_LIST";

// action 생성자 함수
export const addPokemon = (pokemon) => {
  return {
    type: ADD_POKEMON,
    payload: pokemon,
  };
};

export const deletePokemon = (id) => {
  return {
    type: DELETE_POKEMON,
    payload: id,
  };
};

export const getPokemonList = () => {
  return {
    type: GET_POKEMON_LIST,
  };
};
