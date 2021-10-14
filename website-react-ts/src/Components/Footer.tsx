import { Grid, Link, Paper, Toolbar } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <Paper sx={{ borderRadius: 0 }}>
      <Toolbar variant="dense">
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
            <Link color="inherit" sx={{ cursor: "pointer" }}>Imprint (coming soon)</Link>
          </Grid>
        </Grid>
      </Toolbar>
    </Paper>
  );
}

export default Footer;
