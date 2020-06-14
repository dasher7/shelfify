import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import { App } from "./App";
import Firebase, { FirebaseContext } from "./firebase";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <FirebaseContext.Provider value={new Firebase()}>
      <App />
    </FirebaseContext.Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
