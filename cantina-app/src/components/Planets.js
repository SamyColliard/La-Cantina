import { Link } from "react-router-dom";
import React from "react";
import "./Planets.css";

function Planets(props) {
  const namePlanetPop = (planet) => {
    const planetTitle = "." + planet;
    const planetTitleDom = document.querySelector(planetTitle);
    planetTitleDom.classList.toggle("visi");
  };

  // const namePlaneteSpan = (planet) => {
  //   let result = [];
  //   let dom = document.querySelector(".earthTitle");

  //   console.log(planet);
  //   console.log(dom);
  //   planet.split("").map((e) => {
  //     result.push(`<span>{e} </span>`);
  //     // dom.innerHTML = "result";
  //   });
  // };
  return (
    <div className={props.name}>
      <h1 className={props.classTitre}>{props.name}</h1>
      <Link to={props.link}>
        <img
          onMouseEnter={() => namePlanetPop(props.classTitre)}
          onMouseOut={() => namePlanetPop(props.classTitre)}
          src={props.img}
        />
      </Link>
    </div>
  );
}

export default Planets;
