import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// !initial state
const initialState = {
  placeholder: [{ key: 1, value: "s" }]
};

// !create context
export const GlobalContext = createContext(initialState);

// !provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //?Actions

  function dummyAction(newValue) {
    dispatch({
      type: "DUMMY",
      payload: newValue
    });
  }

  return (
    <GlobalContext.Provider
      value={{ placeholder: state.placeholder, dummyAction }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
