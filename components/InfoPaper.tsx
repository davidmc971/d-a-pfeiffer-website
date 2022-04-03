import React from "react";
import { Typography, Paper, Divider, Container, Box } from "@mui/material";

type InfoPaperProps = {
  title: string;
  id: string;
};

function InfoPaper(props: React.PropsWithChildren<InfoPaperProps>) {
  return (
    <Container>
      <div id={props.id} />
      <Paper sx={{ marginY: 2 }}>
        <Typography variant="h5" sx={{ padding: 2 }}>
          {props.title}
        </Typography>
        <Divider />
        <Box component="div" sx={{ paddingX: 2, paddingBottom: 1 }}>
          {props.children}
        </Box>
      </Paper>
    </Container>
  );
}

export default InfoPaper;
