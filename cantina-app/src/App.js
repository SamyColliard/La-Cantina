import { Routes, Route } from "react-router-dom"
import logo from './logo.svg';
import './App.css';
import Header from "./components/header";
import Characters from './screens/charactersTatooine';
import Description from "./components/description";
import Cards from "./components/cards"
import TatooineFinal from "./components/tatooineFinal";
function App() {
  return (

    <div className="">

       
      {/* <TatooineFinal /> */}
       <Characters /> 


    </div>
    
  );
}

export default App;
