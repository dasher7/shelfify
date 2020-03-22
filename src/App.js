import React from "react";
import { Home } from "./components/Home";
import { Grommet, grommet } from "grommet";

function App(props) {
  return (
    <Grommet theme={grommet}>
      <Home />
    </Grommet>
  );
}

export default App;
