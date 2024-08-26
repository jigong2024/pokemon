import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dex from "./pages/Dex";
import "./App.css";
import PokemonDetail from "./pages/PokemonDetail";
import PokemonContext from "./context/PokemonContext";
import MOCK_DATA from "./mock";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <PokemonContext.Provider value={MOCK_DATA}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dex" element={<Dex />} />
            <Route path="/pokemon/:id" element={<PokemonDetail />} />
          </Routes>
        </BrowserRouter>
      </PokemonContext.Provider>
    </Provider>
  );
};

export default App;
