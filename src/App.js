import React, { useEffect } from "react";
import "./css/app.css";
import { Shelfify } from "./components/Shelfify";
import { GlobalStore } from "./store/GlobalStore";
import { Switch, Route } from "react-router";
import { Landing } from "./components/Landing";
import { HOME, LANDING } from "./routes/routes";
import { WithAuthentication } from "./auth";
import { withRouter } from "react-router-dom";
import * as ROUTES from "./routes/routes";

const App = ({ user, history }) => {
  console.log("user", user);
  useEffect(() => {
    if (user === null) {
      history.push(ROUTES.LANDING);
    }
    // eslint-disable-next-line
  }, [user]);
  return (
    <GlobalStore>
      <Switch>
        <Route exact path={HOME}>
          <div className="App">
            <Shelfify />
          </div>
        </Route>
        <Route path={LANDING}>
          <Landing />
        </Route>
      </Switch>
    </GlobalStore>
  );
};
export default withRouter(WithAuthentication(App));
