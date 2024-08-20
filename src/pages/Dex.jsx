import React from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import "./Dex.css";
import MOCK_DATA from "../mock";

const Dex = () => {
  //   console.log(MOCK_DATA);

  return (
    <div className="dex-page">
      <Dashboard />
      <PokemonList MOCK_DATA={MOCK_DATA} />
    </div>
  );
};

export default Dex;
