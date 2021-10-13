import {
  AppBar,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Scroll from "react-scroll";
import MenuIcon from "@mui/icons-material/Menu";
import { useGlobalState, ViewPortSize } from "../State/GlobalStateProvider";

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
    <ScrollButton scrollTo="portfolio" text="Portfolio" />
  </>
);

function Navigation() {
  const mobileView =
    useGlobalState().state.viewPortSize === ViewPortSize.Mobile;

  const [drawer, setDrawer] = useState(false);

  return (
    <>
      <AppBar position="sticky" color="secondary">
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
    </>
  );
}

// <Box sx={{ position: "fixed", display: "flex", p: 2 }}>
//   <Box sx={{ justifyContent: "flex-start" }}>
//     <Button variant="text" onClick={() => smoothScroll("top")}>
//       <Typography variant="body1">David Alexander Pfeiffer</Typography>
//     </Button>
//   </Box>
//   <Box sx={{ justifyContent: "flex-end" }}>
//     <Button variant="text" onClick={() => smoothScroll("about")}>
//       About
//     </Button>
//     <Button variant="text" onClick={() => smoothScroll("portfolio")}>
//       Portfolio
//     </Button>
//   </Box>
// </Box>

function smoothScroll(dest: string) {
  Scroll.scroller.scrollTo(dest, {
    smooth: true,
    offset: -70,
    duration: 350,
  });
}

export default Navigation;
