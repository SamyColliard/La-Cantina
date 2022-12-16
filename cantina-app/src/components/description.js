import Header from "./header";
import pub from "../assets/rencontres-senior.png";
import "./description.css";
import { Cards, Cards1, Cards2 } from "./cards";
const Description = () => {
  function hidePopUp() {
    const popUpBlock = document.querySelector(".popupPub");
    popUpBlock.classList.add("hide");
  }
  function showPopUp() {
    const popUpBlock = document.querySelector(".popupPub");
    popUpBlock.classList.remove("hide");
  }
  return (
    <div id="description">
      <div className="popupPub hide">
        <div className="popup_inner">
          <p className="pubClose" onClick={hidePopUp}>
            X
          </p>
          <img src={pub} />
        </div>
      </div>
      <div className="div1">
        <Cards />
        <p>
          <span className="letter-style">T</span>atooine était un monde
          désertique situé dans le secteur Arkanis sur le Territoires de la
          Bordure E
          <span className="linkPub" onClick={showPopUp}>
            x
          </span>
          térieure (pas à l’intérieur du coup). Des fossiles de diabétique
          laissaient penser aux scientifiques que Tatooine avait été{" "}
          <span className="linkPub" onClick={showPopUp}>
            recouverte
          </span>{" "}
          par un océan de sucre glace à l'instar de Kamino.
        </p>
      </div>
      <div className="div1">
        <p>
          La planète fut colonisée par un certain Davido{" "}
          <span className="linkPub" onClick={showPopUp}>
            corp
          </span>
          os miniers qui pensaient que la planète était riche en minerais.
          Cependant, lorsqu'elles découvrirent que ce n'était pas le cas, ces
          sbires plièrent bagages et laissèrent leurs ouvriers Vinci sur la
          planète. Depuis, Tatooine est deve
          <span className="linkPub" onClick={showPopUp}>
            nu
          </span>{" "}
          le repaire de nombreuses racailles de la gala
          <span className="linkPub" onClick={showPopUp}>
            x
          </span>
          ie et le fief du Hutt Jabba Desilijic Tiure.
        </p>
        <Cards1 />
      </div>
      <div className="div1">
        <Cards2 />
        <p>
          La planète est également deve
          <span className="linkPub" onClick={showPopUp}>
            nue
          </span>{" "}
          con
          <span className="linkPub" onClick={showPopUp}>
            nue
          </span>{" "}
          pour ses courses de machine à laver comme la Classique de Bosch{" "}
          <span className="linkPub" onClick={showPopUp}>
            Eve
          </span>
          . Les Jawa, un peuple de ferrailleur, et les Tusken, un peuple de
          guerriers un peu cool, étaient des espèces originaires de la planète.
        </p>
      </div>
    </div>
  );
};

export default Description;
