import React from "react";
import InfoPaper from "./InfoPaper";
import LoremIpsum from "react-lorem-ipsum";

function Services() {
  return (
    <InfoPaper title={"Services I provide"} id="services">
      <LoremIpsum />
    </InfoPaper>
  );
}

export default Services;