import React from 'react';
import './Planets.css';

function Planets(props) {
  const namePlanetPop =  planet =>{
    const planetTitle = '.'+planet;
    const planetTitleDom = document.querySelector(planetTitle)
    planetTitleDom.classList.toggle('visi')
  }
    return (
      <div className={props.name}>
         <h1 className={props.classTitre} >{props.name}</h1>
        <img onMouseEnter={() => namePlanetPop(props.classTitre)} onMouseOut={() => namePlanetPop(props.classTitre)} src={props.img} />
      </div>
    );
  }

export default Planets