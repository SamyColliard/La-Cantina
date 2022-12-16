import { Routes, Route } from "react-router-dom"
import logo from './logo.svg';
import './App.css';
import Header from "./components/header";
import Characters from './screens/charactersTatooine';
import Description from "./components/description";
import Cards from "./components/cards"
function App() {
  return (

    <div className="">

      {/* <Header />

      <Characters />

      <Routes>
    			  <Route path="/description" element={<Description />} />
			</Routes> */}
      <Cards />

    </div>
    
  );
}

export default App;
