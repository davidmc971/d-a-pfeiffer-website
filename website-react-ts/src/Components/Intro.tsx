import React from "react";
import { Container, Image } from "react-bootstrap";
import profileImg from "../Assets/profile.jpg";
import "./Intro.css";

function Intro() {
  return (
    <div id="intro" className="view">
      <div id="mask">
        <Container
          fluid
          id="intro-container"
          className="d-flex align-items-center justify-content-center"
        >
          <div className="row d-flex justify-content-center text-center">
            <div className="col-md-10">
              <Image width={128} src={profileImg} roundedCircle />
              <h2 className="display-4 font-weight-bold white-text pt-5 mb-2">
                David Alexander Pfeiffer
              </h2>
              <h4 className="white-text my-4">
                Freelance Software Developer and Computer Science Student
              </h4>
              <button type="button" className="btn btn-outline-white">
                Read more<i className="fa fa-book ml-2"></i>
              </button>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Intro;
