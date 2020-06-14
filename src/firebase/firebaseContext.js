// ! THIS WILL BE OUR CUSTOM FIREBASE HOC
// ! IT WILL COME IN HANDY IN ORDER TO PASS FIREBASE PROP TO OUR COMPONENTS

import React, { createContext } from "react";

const FirebaseContext = createContext(null);

export const firebaseContext = (Component) => (props) => {
  return (
    <FirebaseContext.Consumer>
      {(firebase) => <Component {...props} firebase={firebase} />}
    </FirebaseContext.Consumer>
  );
};

export default FirebaseContext;
