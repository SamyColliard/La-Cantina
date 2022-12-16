import React from "react";
import "./modal.css";
import c3pCute from "../assets/c3p-cute.jpg"

function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>name of person</h1>
        </div>
        <div className="body">
        <img className="imgHot" src={c3pCute}/>
          <p></p>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            add
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;