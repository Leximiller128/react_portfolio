import { MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import { validateEmail } from "../utils/helpers";
import "./styles/contact.css";

function Contact() {
  const [errorMessage, setErrorMessage] = useState("");
  const [email, setEmail] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactMessage, setContactMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "contactName") {
      setContactName(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "contactMessage") {
      setContactMessage(inputValue);
    }
  };

  const nameLeave = (e) => {
    const { target } = e;
    if (!target.value) {
      setErrorMessage("Please add your name");
    } else {
      setErrorMessage("");
    }
  };
  useEffect(() => {
    if (validateEmail(email) || email === "") {
      setErrorMessage("");
    } else {
      setErrorMessage("Please add your email");
    }
  }, [email]);

  return (
    <main className="contact-section">
      <form>
        <p>Name</p>
        <div className="container-2" id="container1">
          <div className="form-floating entry">
            <input
              name="contactName"
              type="text"
              value={contactName}
              className="form-control"
              id="floatingName"
              onChange={handleInputChange}
              onMouseLeave={nameLeave}
            ></input>
          </div>

          <p>Email address</p>
          <div className="form-floating mb-3 entry" id="container1">
            <input
              name="email"
              type="email"
              value={email}
              className="form-control"
              onChange={handleInputChange}
              id="floatingInput"
              onMouseLeave={nameLeave}
            ></input>
          </div>

          <p>Message</p>
          <div className="form-floating textarea">
            <textarea
              name="contactMessage"
              value={contactMessage}
              className="form-control long"
              onChange={handleInputChange}
              id="floatingTextarea2"
              onMouseLeave={nameLeave}
            ></textarea>
          </div>

          <MDBRow>
            <p className="error-text">{errorMessage}</p>
            <button
              className="btn-main btn2 hover-shadow"
              id="btn-support"
              type="sumbit"
            >
              Submit
            </button>
          </MDBRow>
          <MDBRow>
            <div className="contact-info">
              <div id="contact">
                <a>Contact Me:</a>
                <br></br>
                <a>Lexi Miller</a>
                <br></br>
                <a>leximiller128@gmail.com</a>
                <br></br>
                <a>Boulder, CO</a>
              </div>
              <a
                className="email"
                href="leximiller128@gmail.com"
                target="_blank"
                rel="noreferrer"
              ></a>
            </div>
          </MDBRow>
        </div>
      </form>
    </main>
  );
}

export default Contact;
