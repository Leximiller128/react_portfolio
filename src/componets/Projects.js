import React from "react";
import { MDBBtn, MDBContainer, MDBRipple } from "mdb-react-ui-kit";
import "./styles/projects.css";

export default function Projects() {
  return (
    <MDBContainer>
      <MDBRipple
        id="padding"
        rippleTag="div"
        className="sm-image hover-overlay hover-zoom hover-shadow"
      >
        <img src={require("./assets/dad-joke-blog.png")} className="w-100" />
        <a href="https://hi-blog-im-dad.herokuapp.com/login">
          <div
            className="mask"
            style={{ backgroundColor: "rgba(57, 192, 237, 0.2)" }}
          ></div>
        </a>
      </MDBRipple>
      <MDBRipple
        id="padding"
        rippleTag="div"
        className="sm-image hover-overlay hover-zoom hover-shadow"
      >
        <img src={require("./assets/tarot-keeper.png")} className="w-100" />
        <a href="https://my-tarot-keeper.herokuapp.com/">
          <div
            className="mask"
            style={{ backgroundColor: "rgba(57, 192, 237, 0.2)" }}
          ></div>
        </a>
      </MDBRipple>
      <MDBRipple
        id="padding"
        rippleTag="div"
        className="sm-image hover-overlay hover-zoom hover-shadow"
      >
        <img src={require("./assets/national-parks.png")} className="w-100" />
        <a href="https://leximiller128.github.io/project-1-National-Parks-R-US/">
          <div
            className="mask"
            style={{ backgroundColor: "rgba(57, 192, 237, 0.2)" }}
          ></div>
        </a>
      </MDBRipple>
    </MDBContainer>
  );
}
