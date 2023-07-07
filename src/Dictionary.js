import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState({});

  function handleResponse(response) {
    setResults(response.data.meanings[0].definition);

  }
  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword} definition`);

    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=a3c53b47tec350ef3aeodd4ca5138dbc`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" autoFocus={true} onChange={handleKeywordChange} />
      </form>
      <Results results={results} />
    </div>
  );
}
