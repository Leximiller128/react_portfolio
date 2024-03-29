//import footer.css
// import "../styles/footer.css";
import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <MDBFooter
      className="text-center text-white"
      style={{ backgroundColor: "#4AD4C1" }}
    >
      <MDBContainer className="pt-4">
        <section className="mb-4">
          {/* <MDBBtn
            rippleColor="dark"
            color="link"
            floating
            size="lg"
            className="text-dark m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab className="fab fa-facebook-f" />
          </MDBBtn> */}
          {/* 
          <MDBBtn
            rippleColor="dark"
            color="link"
            floating
            size="lg"
            className="text-dark m-1"
            href="https://twitter.com/Lexiincolorado"
            role="button"
          >
            <MDBIcon fab className="fa-twitter" />
          </MDBBtn> */}

          {/* <MDBBtn
            rippleColor="dark"
            color="link"
            floating
            size="lg"
            className="text-dark m-1"
            href="https://twitter.com/search?q=%23tarot"
            role="button"
          >
            <MDBIcon fab className="fa-google" />
          </MDBBtn> */}

          {/* <MDBBtn
            rippleColor="dark"
            color="link"
            floating
            size="lg"
            className="text-dark m-1"
            href="#!https://www.google.com/search?q=tarot+card"
            role="button"
          >
            <MDBIcon fab className="fa-instagram" />
          </MDBBtn> */}

          <MDBBtn
            rippleColor="dark"
            color="link"
            floating
            size="lg"
            className="text-dark m-1"
            href="https://www.linkedin.com/in/leximiller128/"
            role="button"
          >
            <MDBIcon fab className="fa-linkedin" />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color="link"
            floating
            size="lg"
            className="text-dark m-1"
            href="https://github.com/Leximiller128"
            role="button"
          >
            <MDBIcon fab className="fa-github" />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div
        className="text-center text-white p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2022 Copyright
        <a className="text-dark" href="https://mdbootstrap.com/"></a>
      </div>
    </MDBFooter>
  );
}
