import { Avatar, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import profileImg from "../Assets/profile.jpg";
import "./Intro.css";

function Intro() {
  return (
    <div id="intro" className="view">
      <div id="mask">
        <Box sx={{ display: "flex", height: "100%", alignItems: "center", justifyContent: "center" }}>
          <Stack spacing={2} alignItems="center">
            <Avatar src={profileImg} sx={{ width: 128, height: 128 }} />
            <Typography variant="h2">David Alexander Pfeiffer</Typography>
            <Typography variant="h5">
              Freelance Software Developer and Computer Science Student
            </Typography>
          </Stack>
        </Box>
        {/* <Container
          fluid
          id="intro-container"
          className="d-flex align-items-center justify-content-center"
        >
          <div className="row d-flex justify-content-center text-center">
            <div className="col-md-10">
              <Image width={128} src={profileImg} roundedCircle />
              <h1 className="white-text">
                David Alexander Pfeiffer
              </h1>
              <h4 className="white-text">
                Freelance Software Developer and Computer Science Student
              </h4>
            </div>
          </div>
        </Container> */}
      </div>
    </div>
  );
}

export default Intro;
