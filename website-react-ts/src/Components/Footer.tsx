import { Container, Divider, Grid, Link, Paper, Toolbar } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <>
      <Divider />
      <Toolbar>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item xs="auto" alignContent="center">
            Copyright 2021
          </Grid>
          <Grid item xs="auto">
            <Link color="inherit" sx={{ cursor: "pointer" }}>Imprint</Link>
          </Grid>
        </Grid>
      </Toolbar>
    </>
  );
}

export default Footer;
