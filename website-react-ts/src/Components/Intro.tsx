import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Avatar,
  ButtonGroup,
  Container,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import profileImg from "../Assets/profile.jpg";
import "./Intro.css";
import {
  faLinkedin,
  faGithub,
  faGitlab,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Intro() {
  return (
    <div id="intro" className="view">
      <div id="mask">
        <Box
          sx={{
            display: "flex",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Container>
            <Stack spacing={2} alignItems="center">
              <Avatar src={profileImg} sx={{ width: 128, height: 128 }} />
              <Typography variant="h3" textAlign="center">
                David Alexander Pfeiffer
              </Typography>
              <Typography variant="h6" textAlign="center">
                Freelance Software Developer and Computer Science Student
              </Typography>
              <ButtonGroup>
                <Tooltip title="GitHub">
                  <IconButton
                    onClick={() => window.open("https://github.com/davidmc971")}
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </IconButton>
                </Tooltip>
                <Tooltip title="GitLab">
                  <IconButton
                    onClick={() => window.open("https://gitlab.com/davidmc971")}
                  >
                    <FontAwesomeIcon icon={faGitlab} />
                  </IconButton>
                </Tooltip>
                <Tooltip title="LinkedIn">
                  <IconButton
                    onClick={() =>
                      window.open(
                        "https://linkedin.com/in/david-alexander-pfeiffer/"
                      )
                    }
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Discord Server">
                  <IconButton
                    onClick={() => window.open("https://discord.gg/RcTfXBkn2g")}
                  >
                    <FontAwesomeIcon icon={faDiscord} />
                  </IconButton>
                </Tooltip>
                <Tooltip title="david.pfeiffer971@gmail.com">
                  <IconButton
                    onClick={() =>
                      window.open("mailto:david.pfeiffer971@gmail.com")
                    }
                  >
                    <FontAwesomeIcon icon={faEnvelope} />
                  </IconButton>
                </Tooltip>
              </ButtonGroup>
            </Stack>
          </Container>
        </Box>
      </div>
    </div>
  );
}

export default Intro;
