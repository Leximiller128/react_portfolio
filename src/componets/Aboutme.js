import React from "react";
import { MDBRow, MDBCol, MDBContainer } from "mdb-react-ui-kit";

export default function Aboutme() {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol lg="4" md="12" className="mb-4">
          <img src={require("./assets/IMG_0726.jpg")} className="img-fluid" />
        </MDBCol>
      </MDBRow>
      I am a DU Fullstack Coding Bootcamp student from Boulder, CO. My previous
      experience is in sales and I am looking for a job as a Sales Engineer.
    </MDBContainer>
  );
}
