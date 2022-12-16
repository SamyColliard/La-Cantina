import React from "react";
import "./modal.css";
import c3pCute from "../assets/c3p-cute.jpg"
import jabba from "../assets/Jabba.png"
import luke from "../assets/luke.png"

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
          <h1>name of person</h1>
        </div>
        <div className="body">
        <img className="imgHot" src={jabba}/>
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
          <h1>name of person</h1>
        </div>
        <div className="body">
        <img className="imgHot" src={luke}/>
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

export {Modal, Modal1, Modal2};