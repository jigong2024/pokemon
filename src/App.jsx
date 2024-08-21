import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dex from "./pages/Dex";
import "./App.css";
import PokemonDetail from "./pages/PokemonDetail";
import MOCK_DATA from "./mock";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dex" element={<Dex MOCK_DATA={MOCK_DATA} />} />
        <Route
          path="/pokemon/:id"
          element={<PokemonDetail MOCK_DATA={MOCK_DATA} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
