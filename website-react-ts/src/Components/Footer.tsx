import { Grid, Link, Paper } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <Paper sx={{ padding: 2, borderRadius: 0 }}>
      <Grid container>
        <Grid item xs={2}>
          Copyright 2021
        </Grid>
        <Grid item xs={2}>
          <Link color="inherit">Imprint</Link>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Footer;
