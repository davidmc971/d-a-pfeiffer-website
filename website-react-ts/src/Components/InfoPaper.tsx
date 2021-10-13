import React from "react";
import { Typography, Paper, Divider } from "@mui/material";
import ResponsiveBox from "./ResponsiveBox";

type InfoPaperProps = {
  title: string;
  id: string;
};

function InfoPaper(props: React.PropsWithChildren<InfoPaperProps>) {
  return (
    <ResponsiveBox>
      <div id={props.id} />
      <Paper sx={{ marginY: 2 }}>
        <Typography variant="h5" sx={{ padding: 2 }}>
          {props.title}
        </Typography>
        <Divider />
        <Typography variant="body1" sx={{ paddingX: 2, paddingBottom: 1 }}>
          {props.children}
        </Typography>
      </Paper>
    </ResponsiveBox>
  );
}

export default InfoPaper;
