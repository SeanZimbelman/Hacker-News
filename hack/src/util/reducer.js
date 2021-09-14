import React, { useState, useReducer } from "react";
import { useHackContext } from "./context";
const { hacks } = useHackContext();

const initialHacks = {
  hacks: hacks,
};

function reducer(state, action) {
  switch (action.type) {
    case "remove":
      return {
        hacks: state.filter((hack) => hack.title !== action.payload),
      };
    default:
      throw new Error();
  }
}

function remove({ title }) {
  const [state, dispatch] = useReducer(reducer, initialHacks);
  return (
    <button onClick={() => dispatch({ type: "remove", payload: title })}>
      remove
    </button>
  );
}
