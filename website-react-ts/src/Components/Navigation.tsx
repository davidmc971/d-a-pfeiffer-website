import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Scroll from "react-scroll";

type Props = {
  className?: string;
};

const Navigation: React.FC<Props> = (props) => (
  <Box sx={{ position: "fixed", display: "flex", p: 2 }}>
    <Box sx={{ justifyContent: "flex-start" }}>
      <Button variant="text" onClick={() => smoothScroll("top")}>
        <Typography variant="body1">David Alexander Pfeiffer</Typography>
      </Button>
    </Box>
    <Box sx={{ justifyContent: "flex-end" }}>
      <Button variant="text" onClick={() => smoothScroll("about")}>
        About
      </Button>
      <Button variant="text" onClick={() => smoothScroll("portfolio")}>
        Portfolio
      </Button>
    </Box>
  </Box>
  // <Navbar
  //   fixed="top"
  //   className="scrolling-navbar"
  //   collapseOnSelect
  //   expand="sm"
  //   bg="dark"
  //   variant="dark"
  // >
  //   <Container fluid>
  //     <Navbar.Brand href="#" onClick={() => smoothScroll("top")}>
  //       David Alexander Pfeiffer
  //     </Navbar.Brand>
  //     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  //     <Navbar.Collapse id="responsive-navbar-nav">
  //       <Nav className="me-auto justify-content-end">
  //         <Nav.Link onClick={() => smoothScroll("about")}>About Me</Nav.Link>
  //         <Nav.Link onClick={() => smoothScroll("portfolio")}>
  //           Portfolio
  //         </Nav.Link>
  //       </Nav>
  //     </Navbar.Collapse>
  //   </Container>
  // </Navbar>
);

function smoothScroll(dest: string) {
  Scroll.scroller.scrollTo(dest, {
    smooth: true,
    offset: -70,
    duration: 150,
  });
}

export default Navigation;
