import React from "react";
import "./modal.css";
import c3pCute from "../assets/c3p-cute.jpg";
import jabba from "../assets/Jabba.png";
import luke from "../assets/luke.png";

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
          <h1>C-3PO</h1>
        </div>
        <div className="module">
          <img className="imgHot" src={c3pCute} />
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

function Modal1({ setOpenModal }) {
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
          <h1>Jabba Desilijic Tiure</h1>
        </div>
        <div className="module">
          <img className="imgHot" src={jabba} />
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

function Modal2({ setOpenModal }) {
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
          <h1>Luke Skywalker</h1>
        </div>
        <div className="module">
          <img className="imgHot" src={luke} />
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

export { Modal, Modal1, Modal2 };
