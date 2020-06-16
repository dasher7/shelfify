import React from "react";
import { AuthUserContext } from "../auth";

export const withAuthenticationCons = (Component) => (props) => {
  return (
    <AuthUserContext.Consumer>
      {(authUser) => <Component authUser={authUser} {...props} />}
    </AuthUserContext.Consumer>
  );
};
