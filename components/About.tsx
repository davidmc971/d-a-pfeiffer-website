import { Typography } from "@mui/material";
import React from "react";
import InfoPaper from "./InfoPaper";

function About() {
  return (
    <InfoPaper title={"About me"} id="about">
      <p>
        Welcome to my website! My name is David Alexander Pfeiffer.
      </p>

      <p>
        I am from Aachen, Germany and am 23 years old.
      </p>

      <p>
        I am working as a self-employed freelancer in my business &quot;David
        Alexander Pfeiffer Software & IT&quot;, which I started in September 2021.
      </p>

      <p>
        Apart from that I am studying for my bachelor&apos;s degree in Computer
        Science at RWTH Aachen University.
      </p>
    </InfoPaper>
  );
}

export default About;
