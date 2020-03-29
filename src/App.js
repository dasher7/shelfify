import React from "react";
import { Grommet, grommet } from "grommet";
import { Home } from "./components/Home";
import { GlobalProvider } from "./store/GlobalStore";

function App(props) {
  return (
    <Grommet theme={grommet} full>
      <GlobalProvider>
        <Home />
      </GlobalProvider>
    </Grommet>
  );
}

export default App;
