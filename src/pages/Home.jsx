import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-page">
      <img
        src="/img/pokemonlogo.png"
        alt="Pokemon Logo"
        className="pokemon-logo"
      />
      <Link to="/dex">
        <img
          src="/img/pokemonball.png"
          alt="Pokemon Ball"
          className="pokemon-ball"
        />
      </Link>

      <p className="text">여행을 시작하고 싶다면 포켓몬볼을 눌러주세요!</p>
    </div>
  );
};

export default Home;
