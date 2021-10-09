import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { Box, CSSProperties, styled, useTheme } from "@mui/system";
import React from "react";
import Scroll from "react-scroll";
import MenuIcon from "@mui/icons-material/Menu";

function Navigation() {
  return (
    <AppBar position="sticky" color="secondary">
      <Toolbar variant="dense">
        <IconButton
          size="medium"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          sx={{ cursor: "pointer" }}
          variant="body1"
          onClick={() => smoothScroll("top")}
        >
          David Alexander Pfeiffer
        </Typography>
        <div style={{ flexGrow: 1 }} />
        <Button variant="text" onClick={() => smoothScroll("about")}>
          About
        </Button>
        <Button variant="text" onClick={() => smoothScroll("portfolio")}>
          Portfolio
        </Button>
      </Toolbar>
    </AppBar>
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
