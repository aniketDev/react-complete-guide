import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Aniket", age: "27" },
      { name: "Asit", age: "59" },
      { name: "Kabita", age: "51" }
    ],
    showPersons: true
  };

  switchNameHandler = fullName => {
    // DON'T DO THIS: this.state.persons[1].name = "Asit Baran";
    this.setState({
      persons: [
        { name: fullName, age: "27" },
        { name: "Asit Baran", age: "59" },
        { name: "Kabita", age: "53" }
      ]
    });
  };

  nameChangeHandler = event => {
    this.setState({
      persons: [
        { name: "Aniket", age: "27" },
        { name: "Asit", age: "59" },
        { name: event.target.value, age: "51" }
      ]
    });
  };

  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons });
  };

  render() {
    const style = {
      backgroundColor: "teal",
      border: "1px solid yellow",
      padding: "10px",
      color: "white"
    };

    return (
      <div className="App">
        <h1>Hello react</h1>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {this.state.showPersons ? (
          <div>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
            />
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              onClick={this.switchNameHandler.bind(this, "Aniket Mandal!!")}
            >
              I love programming
            </Person>
            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age}
              changed={this.nameChangeHandler}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
