import React from "react";
import Dictionary from "./Dictionary.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="text center">
          <small>
            <a
              href="https://github.com/LaetitiaCodes/dictionary-app.git"
              target="_blank"
              rel="noreferrer"
            >
              Open-sourced code{" "}
            </a>
            by Laetitia Ganglmair hosted on{" "}
            <a
              href="https://react-dictionnary-app-by-laetitia.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Netlify
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
