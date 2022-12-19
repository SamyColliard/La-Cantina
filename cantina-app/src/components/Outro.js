import React, { Component } from "react";
import video1 from "../assets/Outro.mp4";

function Outro() {
  return (
    <div>
      <video src={video1} autoPlay="true" />
    </div>
  );
}

export default Outro;
