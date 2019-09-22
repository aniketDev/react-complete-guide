import React, { Component } from "react";
import styles from "./App.css";
import Radium from "radium";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "kjs76s", name: "Aniket", age: "27" },
      { id: "kj6s", name: "Asit", age: "59" },
      { id: "k76s", name: "Kabita", age: "51" }
    ],
    showPersons: true
  };

  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons });
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    // or
    // const person = Object.assign({}, this.state.persons[personIndex]);
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  deletePersonHandler = index => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons });
  };

  render() {
    const style = {
      backgroundColor: "teal",
      border: "1px solid yellow",
      padding: "10px",
      color: "white",
      ":hover": {
        backgroundColor: "yellow",
        color: "black"
      }
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                onClick={() => this.deletePersonHandler(index)}
                key={person.id}
                changed={event => this.nameChangeHandler(event, person.id)}
              />
            );
          })}
        </div>
      );

      style.backgroundColor = "green";
      style[":hover"] = {
        backgroundColor: "lightgreen",
        color: "black"
      };
    }

    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red");
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }

    return (
      <div className="styles.App">
        <h1>Hello react</h1>
        <p className={classes.join(" ")}>Welcome to rect complete guide</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default Radium(App);
