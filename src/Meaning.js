import React from "react";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            {" "}
            <p>
              {" "}
              {definition.definition}
              <br />
              <em>{definition.example}</em>
            </p>
          </div>
        );
      })}
    </div>
  );
}
//partOfSpeech refers to the type of word we have, whether it's a noun, verb, adj., etc//
//N.B.: a word does have multiple definitions, in the API. We'll display all definitions with their meaning//
