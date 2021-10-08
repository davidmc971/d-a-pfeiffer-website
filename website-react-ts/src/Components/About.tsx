import React from "react";
import { LoremIpsum } from "react-lorem-ipsum";

function About() {
  return (
    <div id="about">
      <p>This is the About section</p>
      <p>
        Hello there. I am David Alexander Pfeiffer.
        <br />I am working as a self-employed freelancer in my business "David
        Alexander Pfeiffer Software & IT", which I started in September 2021.
      </p>
      <LoremIpsum avgSentencesPerParagraph={42} />
    </div>
  );
}

export default About;
