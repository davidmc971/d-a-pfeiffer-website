import React from "react";
import About from "./About";
import "./App.css";
import Intro from "./Intro";
import Navigation from "./Navigation";
import Portfolio from "./Portfolio";
import ResponsiveBox from "./ResponsiveBox";

function App() {
  return (
    <div className="App">
      <div id="top" />
      <header>
        <Navigation />
        <Intro />
      </header>
      <main>
        <ResponsiveBox>
          <About />
        </ResponsiveBox>
        <ResponsiveBox>
          <Portfolio />
        </ResponsiveBox>
      </main>
      <footer>
        {/* TODO: Imprint */}
      </footer>
    </div>
  );
}

export default App;
