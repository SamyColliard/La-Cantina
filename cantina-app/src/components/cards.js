import React, { useState } from "react";
import "./cards.css";
import {Modal, Modal1, Modal2} from "./modal";


function Cards({key,src,alt}) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="Cards">
      <img className="card-img" onClick={() => {
          setModalOpen(true);
        }} src={src} alt="c3p-o"/>

      {modalOpen && <Modal setOpenModal={setModalOpen} />}
    </div>
  );
}

function Cards1({key,src,alt}) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="Cards">
          <img className="card-img" onClick={() => {
          setModalOpen(true);
        }} src={src} alt="c3p-o"/>


      {modalOpen && <Modal1 setOpenModal={setModalOpen} im />}
    </div>
  );
}

function Cards2({key,src,alt}) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="Cards">
          <img className="card-img" onClick={() => {
          setModalOpen(true);
        }} src={src} alt="c3p-o"/>


      {modalOpen && <Modal2 setOpenModal={setModalOpen} />}
    </div>
  );
}
export {Cards, Cards1, Cards2};












// <p>Jabba Desilijic Tiure, plus couramment désigné comme Jabba le Hutt, était un seigneur du crime Hutt basé sur la planète Tatooine où il dirigeait l'une des plus puissantes organisations criminelles appelée le Clan Hutt. Il mourut étranglé par Leia Organa dans sa barge à voiles, la Khetanna en 4 ap.BY. </p>