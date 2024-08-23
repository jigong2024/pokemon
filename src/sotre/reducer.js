import { ADD_POKEMON, DELETE_POKEMON, GET_POKEMON_LIST } from "./action";

//초기값 세팅
const initialState = {
  pokemonList: [],
};

// 리듀서 함수
const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POKEMON:
      return {
        ...state,
        pokemonList: [...state.pokemonList, action.payload],
      };

    case DELETE_POKEMON:
      return {
        ...state,
        pokemonList: state.pokemonList.filter(
          (pokemon) => pokemon.id !== action.payload
        ),
      };

    case GET_POKEMON_LIST:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default pokemonReducer;
