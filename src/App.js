import React from "react";
import { Grommet, grommet } from "grommet";
import { Home } from "./components/Home";
import { LandingPage } from "./components/LandingPage";
import { GlobalProvider } from "./store/GlobalStore";
import { Switch, Route } from "react-router";
import { HOME, LANDING } from "./routes/routes";

function App(props) {
  return (
    <Grommet theme={grommet} full>
      <GlobalProvider>
        <Switch>
          <Route exact path={HOME}>
            <Home />
          </Route>
          <Route path={LANDING}>
            <LandingPage />
          </Route>
        </Switch>
      </GlobalProvider>
    </Grommet>
  );
}

export default App;
