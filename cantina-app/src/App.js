import { Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Characters from "./screens/charactersTatooine";
import Home from "./screens/Home";
import Cards from "./components/cards";
import TatooineFinal from "./components/tatooineFinal";
import Outro from "./components/Outro";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/tatooine" element={<Characters />} />
        <Route path="/outro" element={<Outro />} />
      </Routes>
    </div>
  );
}

export default App;
