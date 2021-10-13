import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import React from "react";
import { GlobalStateProvider } from "../State/GlobalStateProvider";
import About from "./About";
import "./App.css";
import Footer from "./Footer";
import Intro from "./Intro";
import Navigation from "./Navigation";
import Portfolio from "./Portfolio";
import Services from "./Services";

function App() {
  return (
    <GlobalStateProvider>
      <ThemeProvider
        theme={createTheme({
          palette: {
            mode: "dark",
            // primary: {
            //   light: "#ffffff",
            //   main: "#eceff1",
            //   dark: "#babdbe",
            //   contrastText: "#000000",
            // },
            // secondary: {
            //   light: "#62717b",
            //   main: "#37464f",
            //   dark: "#101f27",
            //   contrastText: "#ffffff",
            // },
          },
        })}
      >
        <CssBaseline />
        <div className="App">
          <div id="top" />
          <header
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
