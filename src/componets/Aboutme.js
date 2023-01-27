import React from "react";
import { MDBRow, MDBCol, MDBContainer } from "mdb-react-ui-kit";
import "./styles/aboutme.css";

export default function Aboutme() {
  return (
    <MDBContainer>
      <MDBCol lg="4" md="6" className="mb-4">
        <p>
          I am an experienced Sales Manager in Boulder, CO. I have recently
          completed a Fullstack Coding Bootcamp with Denver University. I am
          looking for a job as a Sales Engineer in Boulder, CO or remote.
        </p>
        <MDBRow lg="12" md="12" className="mb-1">
          <img src={require("./assets/IMG_3540.jpg")} className="img-fluid" />
        </MDBRow>
      </MDBCol>
    </MDBContainer>
  );
}
