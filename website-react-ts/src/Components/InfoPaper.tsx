import React from "react";
import { Typography, Paper, Divider, Container, Grid } from "@mui/material";
import { Box } from "@mui/system";

type InfoPaperProps = {
  title: string;
  subtitle?: string;
  id: string;
};

function InfoPaper(props: React.PropsWithChildren<InfoPaperProps>) {
  return (
    <Container>
      <div id={props.id} />
      <Paper sx={{ marginY: 2 }}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="flex-end"
        >
          <Typography variant="h5" sx={{ padding: 2 }}>
            {props.title}
          </Typography>
          <div style={{ flexGrow: 1 }} />
          <Typography variant="subtitle1" sx={{ padding: 2, paddingTop: 0 }}>
            {props.subtitle}
          </Typography>
        </Grid>
        <Divider />
        <Typography variant="body1" sx={{ paddingX: 2, paddingBottom: 1 }}>
          {props.children}
        </Typography>
      </Paper>
    </Container>
  );
}

export default InfoPaper;
