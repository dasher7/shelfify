import React from "react";
import { Grid, Box } from "grommet";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { MainContent } from "./MainContent";

export const Home = props => {
  return (
    <Grid
      rows={["10vh", "90vh"]}
      columns={["15vw", "85vw"]}
      areas={[
        { name: "header", start: [0, 0], end: [1, 0] },
        { name: "nav", start: [0, 1], end: [0, 1] },
        { name: "main", start: [1, 1], end: [1, 1] }
      ]}
    >
      <Header gridArea="header" />
      <Sidebar gridArea="nav" />
      <MainContent gridArea="main" />
    </Grid>
  );
};
