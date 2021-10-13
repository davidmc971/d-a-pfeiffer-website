import React from "react";
import InfoPaper from "./InfoPaper";
import LoremIpsum from "react-lorem-ipsum";

function Portfolio() {
  return (
    <InfoPaper title={"My Portfolio"} id="portfolio">
      <LoremIpsum />
    </InfoPaper>
  );
}

export default Portfolio;
