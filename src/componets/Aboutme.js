import React from "react";
import { MDBRow, MDBCol, MDBContainer } from "mdb-react-ui-kit";
import "./styles/aboutme.css";

export default function Aboutme() {
  return (
    <MDBContainer>
      <MDBRow lg="12" md="12" className="mb-1">
        <MDBCol lg="3" md="12" className="mb-4">
          <img src={require("./assets/IMG_3540.jpg")} className="img-fluid" />
        </MDBCol>
      </MDBRow>
      I am an experienced Sales Manager in Boulder, CO. I have recently
      completed a Fullstack Coding Bootcamp with Denver University. I am looking
      for a job as a Sales Engineer in Boulder, CO or remote.
    </MDBContainer>
  );
}
