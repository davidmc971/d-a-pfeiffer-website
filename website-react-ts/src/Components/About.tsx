import React from "react";
import InfoPaper from "./InfoPaper";

function About() {
  return (
    <InfoPaper title="About" subtitle="Who am I?" id="about">
      <p>Welcome to my website! My name is David Alexander Pfeiffer.</p>
      <p>I am from Aachen, Germany and am 23 years old.</p>
      <p>
        I am working as a self-employed freelancer in my business "David
        Alexander Pfeiffer Software & IT", which I started in September 2021.
        <br />
        Apart from that I am studying for my bachelor's degree in Computer
        Science at RWTH Aachen University.
      </p>
    </InfoPaper>
  );
}

export default About;
