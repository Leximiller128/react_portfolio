import React from "react";
import { MDBRow, MDBCol, MDBContainer } from "mdb-react-ui-kit";

export default function Aboutme() {
  return (
    <MDBContainer>
      <MDBRow lg="12" md="12" className="mb-1">
        <MDBCol lg="3" md="12" className="mb-4">
          <img src={require("./assets/IMG_3540.jpg")} className="img-fluid" />
        </MDBCol>
      </MDBRow>
      I am a DU Fullstack Coding Bootcamp student from Boulder, CO. My previous
      experience is in sales and I am looking for a job as a Sales Engineer.
    </MDBContainer>
  );
}
