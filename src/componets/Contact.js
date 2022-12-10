import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";
import "./styles/contact.css";

function Contact() {
  const [nameInput, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else {
      setContent(inputValue);
      console.log(content);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage("Invalid email, please try again");
      return;
    }
    if (!nameInput) {
      setErrorMessage("Please enter a name");
      return;
    }

    if (!content) {
      setErrorMessage("Please enter a message");
      return;
    }

    setContent("");
    setEmail("");
    setName("");
  };

  return (
    <section id="contact">
      <h3>Contact Me!</h3>
      <form>
        <p>Name:</p>
        <input
          id="name"
          name="name"
          type="text"
          onChange={handleInputChange}
          value={nameInput}
        />
        <p>Email:</p>
        <input
          id="email"
          name="email"
          type="text"
          onChange={handleInputChange}
          value={email}
        />
        <p>Message:</p>
        <textarea
          id="content"
          name="content"
          type="text"
          onChange={handleInputChange}
          value={content}
        />
        <button type="button" id="submit-button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p>{errorMessage}</p>
        </div>
      )}
    </section>
  );
}

export default Contact;
