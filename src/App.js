import React from "react";
import { Grommet, grommet } from "grommet";
import { Home } from "./components/Home";

function App(props) {
  return (
    <Grommet theme={grommet} full>
      <Home />
    </Grommet>
  );
}

export default App;
