import React from "react";
import { Box, Heading } from "grommet";

export const Sidebar = () => {
  return (
    <Box
      direction="column"
      margin="medium"
      height="xlarge"
      width="fill"
      align="center"
    >
      <Heading level="1" color="black">
        Shelfify
      </Heading>
    </Box>
  );
};
