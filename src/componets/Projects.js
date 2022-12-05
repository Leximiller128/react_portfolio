import React from "react";
import { MDBBtn } from "mdb-react-ui-kit";

export default function Projects() {
  return (
    <>
      <div />
      Click to see project-->
      <MDBBtn
        className="buttons"
        size="lg"
        tag="a"
        href="https://my-tarot-keeper.herokuapp.com/"
        color="dark"
        active
      >
        Project 3- Tarot Keeper
      </MDBBtn>
      <div />
      Click to see project-->
      <MDBBtn
        className="buttons"
        size="lg"
        tag="a"
        href="https://hi-blog-im-dad.herokuapp.com/"
        color="secondary"
        active
      >
        Project 2- Hi Blog, I'm Dad!
      </MDBBtn>
    </>
  );
}
