import { configureStore } from "@reduxjs/toolkit";
import { pokemonReducer } from "./pokemonSlice";

// 스토어 생성
const store = configureStore({
  reducer: pokemonReducer,
});

export default store;
