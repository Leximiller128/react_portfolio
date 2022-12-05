import { MDBBtn } from "mdb-react-ui-kit";
import React from "react";
import Pdf from "./assets/Lexi.pdf";

export default function Resume() {
  return (
    <MDBBtn className="App" color="dark">
      <a href={Pdf} target="_blank">
        Click this link to see resume
      </a>
    </MDBBtn>
  );
}
