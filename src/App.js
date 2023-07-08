import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>DICTIONARY</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="sunrise" />
        </main>
        <footer className="App-footer">
          <small>
            This project was coded by{" "}
            <a
              href="https://heroic-palmier-0df45c.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Laura Moragues
            </a>{" "}
            and{" "}
            <a
              href="https://github.com/llmh3624/dictionary-project"
              target="_blank"
              rel="noopener noreferrer"
            >
              open-sourced on GitHub
            </a>{" "}
            and hosted on Netlify
          </small>
        </footer>
      </div>
    </div>
  );
}
