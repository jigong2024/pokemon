import React from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import "./Dex.css";

const Dex = () => {
  return (
    <div className="dex-page">
      <Dashboard />
      <PokemonList />
    </div>
  );
};

export default Dex;
