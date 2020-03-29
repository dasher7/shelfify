import React from "react";
import { Grommet, grommet } from "grommet";
import { Home } from "./components/Home";
import { GlobalProvider } from "./store/GlobalStore";

function App(props) {
  return (
    <GlobalProvider>
      <Grommet theme={grommet} full>
        <Home />
      </Grommet>
    </GlobalProvider>
  );
}

export default App;
