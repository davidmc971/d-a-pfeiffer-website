import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  Link,
  Paper,
  Toolbar,
  Button as MUIButton,
} from "@mui/material";
import React, { useState } from "react";
import { Button } from "react-scroll";
import Imprint from "../Assets/Imprint";

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
              Imprint
            </Link>
            <Dialog
              open={modalOpen}
              onClose={() => setModalOpen(false)}
              fullWidth={true}
              maxWidth="md"
            >
              <DialogTitle component="div">
                <h2 style={{ margin: 0 }}>Impressum</h2>
              </DialogTitle>
              <Divider />
              <DialogContent
                sx={{ maxHeight: "60vh" }}
                dangerouslySetInnerHTML={{ __html: Imprint }}
              />
              <Divider />
              <DialogActions>
                <MUIButton sx={{color: "white"}} onClick={() => setModalOpen(false)}>Close</MUIButton>
              </DialogActions>
            </Dialog>
          </Grid>
        </Grid>
      </Toolbar>
    </Paper>
  );
}

export default Footer;
