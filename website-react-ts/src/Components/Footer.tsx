import { Dialog, DialogActions, DialogContent, DialogTitle, Grid, Link, Paper, Toolbar } from "@mui/material";
import React, { useState } from "react";

function Footer() {
  const [modalOpen, setModalOpen] = useState(false);
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
            <Link
              color="inherit"
              sx={{ cursor: "pointer" }}
              onClick={() => setModalOpen(!modalOpen)}
            >
              Imprint (coming soon)
            </Link>
            <Dialog
              open={modalOpen}
              onClose={() => setModalOpen(false)}
              fullWidth={true}
              maxWidth="md"
              >
              <DialogTitle>Imprint</DialogTitle>
              <DialogContent></DialogContent>
              <DialogActions></DialogActions>
            </Dialog>
          </Grid>
        </Grid>
      </Toolbar>
    </Paper>
  );
}

export default Footer;
