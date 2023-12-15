import React, { Component, useState } from "react";
import "../styles/App.css";

let RelationshipResult = [
  "Siblings",
  "Friends",
  "Love",
  "Affection",
  "Marriage",
  "Enemy",
];

const App = () => {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [relationship, setRelationship] = useState("");

  const calculateRelationship = (e) => {
    e.preventDefault();
    if (firstName.trim() === "" || secondName.trim() === "") {
      setRelationship("Please Enter valid input");
      return;
    }
    let name1 = firstName;
    let name2 = secondName;
    for (let c of name1) {
      if (name2.includes(c)) {
        name1 = name1.replace(c, "");
        name2 = name2.replace(c, "");
      }
    }
    setFirstName(name1);
    setSecondName(name2);
    setRelationship(RelationshipResult[(name1.length + name2.length) % 6]);
  };

  const clearAllFields = () => {
    setFirstName("");
    setSecondName("");
    setRelationship("");
  };

  return (
    <div id="main">
      {/* Do not remove the main div */}
      <form action="">
        <input
          data-testid="input1"
          name="name1"
          placeholder="Enter first name"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
        />
        <input
          data-testid="input2"
          name="name2"
          placeholder="Enter second name"
          onChange={(e) => setSecondName(e.target.value)}
          value={secondName}
        />
        <button
          data-testid="calculate_relationship"
          type="submit"
          onClick={calculateRelationship}
        >
          Calculate Relationship Future
        </button>
        <button data-testid="clear" type="reset" onClick={clearAllFields}>
          Clear
        </button>
      </form>
      <h3 data-testid="answer">{relationship}</h3>
    </div>
  );
};

export default App;
