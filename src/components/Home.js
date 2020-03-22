import React from "react";
import { Grid, Box } from "grommet";
import { Sidebar } from "./Sidebar";
import { MainContent } from "./MainContent";

export const Home = () => {
  return (
    <Grid
      areas={[
        { name: "nav", start: [0, 0], end: [0, 0] },
        { name: "main", start: [1, 0], end: [2, 0] }
      ]}
      columns={["medium", "flex"]}
      rows={["100vh"]}
    >
      <Box gridArea="nav" background="blue">
        <Sidebar />
      </Box>
      <Box gridArea="main" background="red">
        {" "}
        <MainContent />
      </Box>
    </Grid>
  );
};
