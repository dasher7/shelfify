import React from "react";
import { Accordion, AccordionPanel, Box, Heading, Text, Button } from "grommet";

export const Sidebar = ({ gridArea }) => {
  return (
    <Box
      gridArea={gridArea}
      background={{ color: "#116466" }}
      width="fill"
      justify="center"
      fill
    >
      <Box height="xlarge" alignSelf="start" fill>
        <Box
          pad="small"
          border={{ color: "border", side: "horizontal", size: "small" }}
        >
          <Heading level="4">Multimedia</Heading>
        </Box>
        <Box
          pad="small"
          border={{ color: "border", side: "horizontal", size: "small" }}
        >
          <Heading level="4">Music</Heading>
        </Box>
        <Box
          pad="small"
          border={{ color: "border", side: "horizontal", size: "small" }}
        >
          <Heading level="4">Film&TV</Heading>
        </Box>
      </Box>
      <Box
        direction="row"
        pad="medium"
        gap="small"
        justify="around"
        alignSelf="end"
      >
        <Button label="+Category" />
        <Button label="Settings" />
      </Box>
    </Box>
  );
};
