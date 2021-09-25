import React from "react";
import "./App.css";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Badge from "./Badge";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Typography className="App-text" color={"white"}>Website coming soon!</Typography>
        <Box height={100} />
        <Badge />
      </header>
    </div>
  );
}

export default App;
