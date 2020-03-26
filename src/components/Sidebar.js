import React, { useState } from "react";
import { Box, Footer, Heading, Button } from "grommet";
import { AddCircle } from "grommet-icons";

export const Sidebar = props => {
  return (
    <Box
      direction="column-reverse"
      width="medium"
      background={{ color: "#19202C" }}
    >
      <Box pad="small" align="center">
        <Button icon={<AddCircle />} label="add category" color="white" />
      </Box>
      <Box
        flex
        height="small"
        width="medium"
        background={{ color: "#3D6574" }}
        align="center"
        justify="start"
      >
        <Box align="center">
          <Heading level="3">Multimedia</Heading>
        </Box>
        <Box align="center">
          <Heading level="4">Music</Heading>
        </Box>
        <Box align="center">
          <Heading level="4">Film</Heading>
        </Box>
      </Box>
    </Box>
  );
};
