import React from "react";
import { Grid, Box } from "grommet";
import { Sidebar } from "./Sidebar";
import { MainContent } from "./MainContent";

export const Home = props => {
  return (
    <Grid
      rows={["10vh", "90vh"]}
      columns={["medium", "xxlarge"]}
      areas={[
        { name: "header", start: [0, 0], end: [1, 0] },
        { name: "nav", start: [0, 1], end: [0, 1] },
        { name: "main", start: [1, 1], end: [1, 1] }
      ]}
    >
      <Box gridArea="header" background="brand" />
      <Box gridArea="nav" background="light-5" />
      <Box gridArea="main" background="light-2" />
    </Grid>

    /* <Grid
      areas={[
        { name: "header", start: [0, 0], end: [0, 1] },
        { name: "nav", start: [0, 0], end: [0, 0] },
        { name: "main", start: [1, 0], end: [2, 0] }
      ]}
      columns={["medium", "flex"]}
      rows={["100vh"]}
    >
      <Box gridArea="header" background="green">
        Header
      </Box>
      <Box gridArea="nav" background="accent-4">
        <Sidebar />
      </Box>
      <Box gridArea="main" background="red">
        <MainContent />
      </Box>
    </Grid> */
  );
};
