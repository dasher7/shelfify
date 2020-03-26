import React from "react";
import { Box, Calendar } from "grommet";
import { Card } from "./Card";

export const MainContent = props => {
  return (
    <Box flex pad="medium" align="start" gap="small" overflow="auto">
      <Box gap="medium" direction="row" overflow="auto">
        <Card />
        <Card />
      </Box>
      <Box gap="medium" direction="row" overflow="auto">
        <Card />
        <Card />
        <Card />
        <Card />
      </Box>
    </Box>
  );
};
