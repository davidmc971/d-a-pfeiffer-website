import {
  AppBar,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import React, { useState } from "react";
import Scroll from "react-scroll";
import MenuIcon from "@mui/icons-material/Menu";
import { useGlobalState, ViewPortSize } from "../lib/State/GlobalStateProvider";

const ScrollButton = ({
  text,
  scrollTo,
}: {
  text: string;
  scrollTo: string;
}) => (
  <Button variant="text" color="inherit" onClick={() => smoothScroll(scrollTo)}>
    {text}
  </Button>
);

const NavButtons = () => (
  <>
    <ScrollButton scrollTo="about" text="About" />
    <ScrollButton scrollTo="services" text="Services" />
    <ScrollButton scrollTo="portfolio" text="Portfolio" />
  </>
);

function Navigation() {
  const mobileView =
    useGlobalState().state.viewPortSize === ViewPortSize.Mobile;

  const [drawer, setDrawer] = useState(false);

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 96,
    target: undefined,
  });

  return (
    <AppBar
      position="sticky"
      style={{
        transition: drawer ? "30ms ease" : "150ms ease",
        boxShadow: trigger ? "inherit" : "none"
      }}
      color={trigger || drawer ? "inherit" : "transparent"}
    >
      <Toolbar variant="dense">
        {mobileView ? (
          <>
            <IconButton
              size="medium"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => setDrawer(!drawer)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              variant="temporary"
              open={drawer}
              onClose={() => setDrawer(false)}
              onClick={() => setDrawer(false)}
            >
              <Toolbar />
              <NavButtons />
            </Drawer>
          </>
        ) : (
          ""
        )}

        <Typography
          sx={{ cursor: "pointer" }}
          variant="body1"
          onClick={() => smoothScroll("top")}
        >
          David Alexander Pfeiffer
        </Typography>
        <div style={{ flexGrow: 1 }} />
        {!mobileView ? <NavButtons /> : ""}
      </Toolbar>
    </AppBar>
  );
}

function smoothScroll(dest: string) {
  Scroll.scroller.scrollTo(dest, {
    smooth: true,
    offset: -70,
    duration: 350,
  });
}

export default Navigation;
