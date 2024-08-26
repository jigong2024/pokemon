import { ADD_POKEMON, DELETE_POKEMON, GET_POKEMON_LIST } from "./action";

//초기값 세팅
const initialState = {
  pokemonList: [],
  travelPokemon: [],
};

// 리듀서 함수
const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POKEMON:
      // 중복 체크 로직 추가
      const isDuplicate = state.travelPokemon.some(
        (pokemon) => pokemon.id === action.payload.id
      );

      // 중복되지 않은 경우에만 추가
      if (!isDuplicate) {
        return {
          ...state,
          travelPokemon: [...state.travelPokemon, action.payload],
        };
      } else {
        // 중복인 경우 기존 상태 반환
        return state;
      }

    case DELETE_POKEMON:
      return {
        ...state,
        travelPokemon: state.travelPokemon.filter(
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
