import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Scroll from "react-scroll";

type Props = {
  className?: string;
};

const Navigation: React.FC<Props> = (props) => (
  <Navbar
    fixed="top"
    className="scrolling-navbar"
    collapseOnSelect
    expand="sm"
    bg="dark"
    variant="dark"
  >
    <Container fluid>
      <Navbar.Brand href="#" onClick={() => smoothScroll("top")}>
        David Alexander Pfeiffer
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto justify-content-end">
          <Nav.Link onClick={() => smoothScroll("about")}>About Me</Nav.Link>
          <Nav.Link onClick={() => smoothScroll("portfolio")}>
            Portfolio
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

function smoothScroll(dest: string) {
  Scroll.scroller.scrollTo(dest, {
    smooth: true,
    offset: -70,
    duration: 150,
  });
}

export default Navigation;
