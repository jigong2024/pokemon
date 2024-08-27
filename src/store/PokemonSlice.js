import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  travelPokemon: [],
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    addPokemon: (state, action) => {
      const isDuplicate = state.travelPokemon.some(
        (pokemon) => pokemon.id === action.payload.id
      );

      if (!isDuplicate) {
        state.travelPokemon.push(action.payload);
      }
    },
    deletePokemon: (state, action) => {
      state.travelPokemon = state.travelPokemon.filter(
        (pokemon) => pokemon.id !== action.payload
      );
    },
  },
});

export const pokemonActions = pokemonSlice.actions;
export const pokemonReducer = pokemonSlice.reducer;
