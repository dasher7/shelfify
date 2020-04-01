import React from "react";
import { Box } from "grommet";
import { NavigationBar } from "./NavigationBar";
import { Sidebar } from "./Sidebar";
import { MainContent } from "./MainContent";

export const Home = props => {
  return (
    <Box fill>
      <NavigationBar />
      <Box flex direction="row" overflow={{ horizontal: "hidden" }}>
        <Sidebar />
        <MainContent />
      </Box>
    </Box>
  );
};
