import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./App";
import Firebase, { FirebaseContext } from "./firebase";
import { BrowserRouter } from "react-router-dom";
import UserProvider from "./auth/userProvider";

ReactDOM.render(
  <BrowserRouter>
    <FirebaseContext.Provider value={new Firebase()}>
      <UserProvider>
        <App />
      </UserProvider>
    </FirebaseContext.Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
