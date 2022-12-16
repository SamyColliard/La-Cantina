import React, { useState } from "react";
import "./cards.css";
import Modal from "./modal";

function Cards() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="Cards">
      
      <button
        className="openModalBtn"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Open
      </button>

      {modalOpen && <Modal setOpenModal={setModalOpen} />}
    </div>
  );
}

export default Cards;













// <p>Jabba Desilijic Tiure, plus couramment désigné comme Jabba le Hutt, était un seigneur du crime Hutt basé sur la planète Tatooine où il dirigeait l'une des plus puissantes organisations criminelles appelée le Clan Hutt. Il mourut étranglé par Leia Organa dans sa barge à voiles, la Khetanna en 4 ap.BY. </p>