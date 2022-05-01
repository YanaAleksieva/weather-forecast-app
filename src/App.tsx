import React from "react";

import "./App.css";
import Heading from "./components/Heading";
import SearchItem from "./components/SearchItem";

function App() {
  return (
    <div className="App">
      <Heading>Weather App</Heading>
      <SearchItem />
    </div>
  );
}

export default App;
