import React from "react";
import "./Person.css";

const person = props => {
  // return <p>I'm a person and I'm {Math.round(Math.random() * 30)} years old</p>;
  return (
    <div className="Person">
      <p onClick={props.onClick}>
        I'm {props.name} and I'm {props.age} years old
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;
