import { createStore } from "redux";
import pokemonReducer from "./reducer";

// 스토어 생성
const store = createStore(pokemonReducer);

export default store;
