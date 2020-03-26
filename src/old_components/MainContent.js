import React from "react";
import { Box, Calendar, Heading } from "grommet";
import { Card } from "./Card";

export const MainContent = ({ gridArea }) => {
  return (
    <Box gridArea={gridArea}>
      <Box margin="medium">
        <Heading>Content</Heading>
        <Box gap="large" overflow="auto">
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </Box>
      </Box>
    </Box>
  );
};
