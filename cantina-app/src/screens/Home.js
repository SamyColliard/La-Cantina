import React from "react";
import MenuHome from "../components/MenuHome";
import ScrollText from "../components/ScrollText";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="scrollTextBlock">
        <ScrollText />
      </div>
      <div className="menu-home">
        <MenuHome />
      </div>
    </div>
  );
}

export default Home;
