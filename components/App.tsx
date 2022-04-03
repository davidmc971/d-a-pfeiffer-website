import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import React from "react";
import { GlobalStateProvider } from "../lib/State/GlobalStateProvider";
import About from "./About";
import styles from "../styles/App.module.css";
import Footer from "./Footer";
import Intro from "./Intro";
import Navigation from "./Navigation";
import Portfolio from "./Portfolio";
import Services from "./Services";

function App() {
  let mainTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#b3e5fc",
      },
      secondary: {
        main: "#90a4ae",
      },
    },
    components: {
      MuiAppBar: {
        defaultProps: {
          color: "transparent",
        },
      },
      MuiButton: {
        defaultProps: {
          size: "small",
        },
      },
      MuiButtonGroup: {
        defaultProps: {
          size: "small",
        },
      },
      MuiCheckbox: {
        defaultProps: {
          size: "small",
        },
      },
      MuiFab: {
        defaultProps: {
          size: "small",
        },
      },
      MuiFormControl: {
        defaultProps: {
          margin: "dense",
          size: "small",
        },
      },
      MuiFormHelperText: {
        defaultProps: {
          margin: "dense",
        },
      },
      MuiIconButton: {
        defaultProps: {
          size: "small",
        },
      },
      MuiInputBase: {
        defaultProps: {
          margin: "dense",
        },
      },
      MuiInputLabel: {
        defaultProps: {
          margin: "dense",
        },
      },
      MuiRadio: {
        defaultProps: {
          size: "small",
        },
      },
      MuiSwitch: {
        defaultProps: {
          size: "small",
        },
      },
      MuiTextField: {
        defaultProps: {
          margin: "dense",
          size: "small",
        },
      },
    },
  });

  mainTheme = createTheme(mainTheme, {
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            scrollbarColor: `#6b6b6b ${mainTheme.palette.background.paper}`,
            "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
              width: "0.4em",
              backgroundColor: mainTheme.palette.background.paper,
            },
            "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
              borderRadius: 2,
              backgroundColor: mainTheme.palette.info,
              minHeight: "1em",
            },
            "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus":
              {
                backgroundColor: "#959595",
              },
            "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active":
              {
                backgroundColor: "#959595",
              },
            "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover":
              {
                backgroundColor: "#959595",
              },
            "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
              backgroundColor: "#2b2b2b",
            },
          },
        },
      },
    },
  });

  return (
    <GlobalStateProvider>
      <ThemeProvider theme={mainTheme}>
        <CssBaseline />
        <div className={styles.App}>
          <div id="top" />
          <header
            className={styles.appHeader}
            style={{ display: "flex", flexFlow: "column", height: "100%" }}
          >
            <div
              style={{
                position: "fixed",
                width: "100%",
                zIndex: 10000,
                top: 0,
                flex: "0 1 auto",
              }}
            >
              <Navigation />
            </div>
            <div style={{ flex: "1 1 auto" }}>
              <Intro />
            </div>
          </header>
          <main>
            <About />
            <Services />
            <Portfolio />
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </ThemeProvider>
    </GlobalStateProvider>
  );
}

export default App;
