import React from "react";
import Synonyms from "./Synonyms";

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
              <strong>Definition:</strong>
              {definition.definition}
              <br /> <strong>Example:</strong>
              <em>{definition.example}</em>
              <Synonyms synonyms={definition.synonyms} />
            </p>
          </div>
        );
      })}
    </div>
  );
}
//partOfSpeech refers to the type of word we have, whether it's a noun, verb, adj., etc//
//N.B.: a word does have multiple definitions, in the API. We'll display all definitions with their meaning//
