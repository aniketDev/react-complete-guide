import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello react</h1>
        <Person name="Aniket" age="28" />
        <Person name="Ani" age="27">
          I love programming
        </Person>
        <Person name="Ket" age="23" />
      </div>
    );
  }
}

export default App;
