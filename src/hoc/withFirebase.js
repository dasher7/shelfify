import React from "react";
import { FirebaseContext } from "../firebase";

export const withFirebase = (Component) => (props) => {
  return (
    <FirebaseContext.Consumer>
      {(firebase) => <Component {...props} firebase={firebase} />}
    </FirebaseContext.Consumer>
  );
};
