import React from "react";
import Planets from "./Planets";

import "./MenuHome.css";

import tatooine from "../assets/tatooine.png";
import dagobah from "../assets/dagobah.png";
import coruscant from "../assets/coruscant.png";
import earth from "../assets/earth.png";
import sun from "../assets/sun.png";

function MenuHome() {
  return (
    <footer id="footer">
      <Planets img={earth} name="earth" classTitre="earthTitle" />

      <Planets
        img={tatooine}
        name="tatooine"
        classTitre="tatooineTitle"
        link="/tatooine"
      />

      <Planets
        img={dagobah}
        name="dagobah"
        classTitre="dagobahTitle"
        link="/outro"
      />

      <Planets img={coruscant} name="coruscant" classTitre="coruscantTitle" />

      <Planets img={sun} name="sun" classTitre="sunTitle" />
    </footer>
  );
}

export default MenuHome;
