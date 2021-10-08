import React from "react";
import { Container } from "@mui/material";

class ResponsiveBox extends React.Component {
  render() {
    return <Container>{this.props.children}</Container>;
  }
}

export default ResponsiveBox;
