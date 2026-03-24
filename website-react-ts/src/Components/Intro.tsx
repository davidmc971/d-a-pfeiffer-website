import {
  faDiscord,
  faGithub,
  faGitlab,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  Avatar,
  Box,
  Container,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import profileImg from "../Assets/profile.jpg";
import { useGlobalState, ViewPortSize } from "../State/GlobalStateProvider";
import FontAwesomeSvgIcon from "../Utilities/FontAwesomeSvgIcon";
import "./Intro.css";
import CodebergSvg from "../Assets/codeberg-logo_icon_white.svg";

function Intro() {
  const viewPortSize = useGlobalState().state.viewPortSize;

  return (
    <div id="bg-img">
      <div id="mask">
        <Box
          component="div"
          className="intro"
          sx={{
            display: "flex",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "32px",
          }}
        >
          <Container>
            <Stack spacing={2} alignItems="center">
              <Avatar src={profileImg} sx={{ width: 128, height: 128 }} />
              <Typography
                variant={
                  viewPortSize === ViewPortSize.Mobile
                    ? "h5"
                    : viewPortSize === ViewPortSize.Tablet
                      ? "h4"
                      : "h3"
                }
                fontWeight={500}
                textAlign="center"
              >
                David Alexander Pfeiffer
              </Typography>
              <Typography
                variant={
                  viewPortSize === ViewPortSize.Mobile
                    ? "h6"
                    : viewPortSize === ViewPortSize.Tablet
                      ? "h5"
                      : "h4"
                }
                fontWeight={400}
                textAlign="center"
              >
                Developer | Instructor | Entrepreneur | CS Geek
              </Typography>
              <Box color="inherit" display="inline">
                <Tooltip title="GitHub">
                  <IconButton
                    onClick={() => window.open("https://github.com/davidmc971")}
                  >
                    <FontAwesomeSvgIcon icon={faGithub} />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Codeberg">
                  <IconButton
                    onClick={() =>
                      window.open("https://codeberg.org/davidmc971/")
                    }
                  >
                    <img alt="Codeberg" src={CodebergSvg} style={{
                      width: "1em",
                      height: "1em",
                      display: "inline-block",
                      flexShrink: 0,
                      fontSize: "1.5rem",
                    }} />
                  </IconButton>
                </Tooltip>
                <Tooltip title="GitLab">
                  <IconButton
                    onClick={() => window.open("https://gitlab.com/davidmc971")}
                  >
                    <FontAwesomeSvgIcon icon={faGitlab} />
                  </IconButton>
                </Tooltip>
                <Tooltip title="LinkedIn">
                  <IconButton
                    onClick={() =>
                      window.open(
                        "https://linkedin.com/in/david-alexander-pfeiffer/",
                      )
                    }
                  >
                    <FontAwesomeSvgIcon icon={faLinkedin} />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Discord Server">
                  <IconButton
                    onClick={() => window.open("https://discord.gg/RcTfXBkn2g")}
                  >
                    <FontAwesomeSvgIcon icon={faDiscord} />
                  </IconButton>
                </Tooltip>
                <Tooltip title="info@davidmc971.dev">
                  <IconButton
                    onClick={() => window.open("mailto:info@davidmc971.dev")}
                  >
                    <FontAwesomeSvgIcon icon={faEnvelope} />
                  </IconButton>
                </Tooltip>
              </Box>
            </Stack>
          </Container>
        </Box>
      </div>
    </div>
  );
}

export default Intro;
