import React from "react";
import InfoPaper from "./InfoPaper";

function About() {
  const birthDate = new Date("1997-12-01");
  const age = Math.floor((Date.now() - new Date(birthDate).getTime()) / 3.15576e+10)
  return (
    <InfoPaper title="About" subtitle="Who am I?" id="about">
      <p>Welcome to my website! My name is David Alexander Pfeiffer.</p>
      <p>I am from Aachen, Germany and am {age} years old.</p>
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
