import React from "react";
import "./css/app.css";
import { Shelfify } from "./components/Shelfify";
import { GlobalStore } from "./store/GlobalStore";
import { Switch, Route } from "react-router";
import { Landing } from "./components/Landing";
import { HOME, LANDING } from "./routes/routes";
import { WithAuthentication } from "./auth";

const App = () => {
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
export default WithAuthentication(App);
