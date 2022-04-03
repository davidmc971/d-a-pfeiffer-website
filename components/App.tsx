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
  
  return (
    <GlobalStateProvider>
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
    </GlobalStateProvider>
  );
}

export default App;
