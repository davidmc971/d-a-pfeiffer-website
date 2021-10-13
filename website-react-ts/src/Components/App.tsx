import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import React from "react";
import { GlobalStateProvider } from "../State/GlobalStateProvider";
import About from "./About";
import "./App.css";
import Intro from "./Intro";
import Navigation from "./Navigation";
import Portfolio from "./Portfolio";
import ResponsiveBox from "./ResponsiveBox";

function App() {
  return (
    <GlobalStateProvider>
      <ThemeProvider
        theme={createTheme({
          palette: {
            primary: {
              light: "#ffffff",
              main: "#eceff1",
              dark: "#babdbe",
              contrastText: "#000000",
            },
            secondary: {
              light: "#62717b",
              main: "#37464f",
              dark: "#101f27",
              contrastText: "#ffffff",
            },
          },
        })}
      >
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
            <ResponsiveBox>
              <About />
            </ResponsiveBox>
            <ResponsiveBox>
              <Portfolio />
            </ResponsiveBox>
          </main>
          <footer>{/* TODO: Imprint */}</footer>
        </div>
      </ThemeProvider>
    </GlobalStateProvider>
  );
}

export default App;
