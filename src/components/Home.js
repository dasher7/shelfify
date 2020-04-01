import React from "react";
import { Box } from "grommet";
import { NavigationBar } from "./NavigationBar";
import { Sidebar } from "./Sidebar";
import { MainContent } from "./MainContent";
import { FirebaseContext } from "../firebase";

export const Home = props => {
  return (
    <Box fill>
      <NavigationBar />
      <Box flex direction="row" overflow={{ horizontal: "hidden" }}>
        <Sidebar />
        <FirebaseContext.Consumer>
          {firebase => <MainContent firebase={firebase} />}
        </FirebaseContext.Consumer>
      </Box>
    </Box>
  );
};
