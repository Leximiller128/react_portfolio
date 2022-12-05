import React, { useState } from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [showNavText, setShowNavText] = useState(false);

  return (
    <MDBNavbar expand="lg" style={{ backgroundColor: "#4AD4C1" }}>
      <MDBContainer fluid>
        <Link to="/Aboutme">
          <MDBNavbarBrand>Lexi Miller</MDBNavbarBrand>
        </Link>
        <MDBNavbarToggler
          type="button"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowNavText(!showNavText)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNavText}>
          <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
            <Link to="/Aboutme">
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current="page">
                  About Me
                </MDBNavbarLink>
              </MDBNavbarItem>
            </Link>
            <Link to="/Projects">
              <MDBNavbarItem>
                <MDBNavbarLink>Projects</MDBNavbarLink>
              </MDBNavbarItem>
            </Link>
            <Link to="/Resume">
              <MDBNavbarItem>
                <MDBNavbarLink>Resume</MDBNavbarLink>
              </MDBNavbarItem>
            </Link>
            <Link to="/Contact">
              <MDBNavbarItem>
                <MDBNavbarLink>Contact</MDBNavbarLink>
              </MDBNavbarItem>
            </Link>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
