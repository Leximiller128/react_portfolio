import { MDBBtn, MDBRipple } from "mdb-react-ui-kit";
import React from "react";
import Pdf from "./assets/LexiResume.pdf";
import "./styles/resume.css";

export default function Resume() {
  return (
    <MDBRipple
      id="padding"
      rippleTag="div"
      className="sm-image hover-overlay hover-zoom hover-shadow"
    >
      <img src={require("./assets/resume-pic.png")} className="w-100" />
      <a href={Pdf} target="_blank">
        <div
          className="mask"
          style={{ backgroundColor: "rgba(57, 192, 237, 0.2)" }}
        ></div>
      </a>
    </MDBRipple>
  );
}
