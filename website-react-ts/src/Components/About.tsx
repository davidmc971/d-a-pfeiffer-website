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
        Alexander Pfeiffer Software & IT", which I started in September of 2021.
        <br />
        In February of 2022 I started as a freelance programming instructor at Wild Code School where I taught FullStack Java development with Spring in a B2B setting for German Telekom.
        <br />
        Afterwards I started teaching FullStack JavaScript development using React, Node and Express in a B2C setting and am still working in this role.
        <br />
        Apart from that I am studying for my bachelor's degree in Computer
        Science at RWTH Aachen University.
      </p>
    </InfoPaper>
  );
}

export default About;
