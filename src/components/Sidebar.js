import React from "react";
import { Accordion, AccordionPanel, Box, Heading, Text } from "grommet";

export const Sidebar = ({ gridArea }) => {
  return (
    <Box
      gridArea={gridArea}
      background="light-4"
      direction="column"
      height="xlarge"
      width="fill"
      align="center"
    >
      <Box margin="medium">
        <Heading level="1" color="black">
          Categories
        </Heading>
        <Accordion>
          <AccordionPanel label="Panel 1">
            <Box pad="medium" background="light-2">
              <Text>One</Text>
            </Box>
          </AccordionPanel>
          <AccordionPanel label="Panel 2">
            <Box pad="medium" background="light-2">
              <Text>Two</Text>
            </Box>
          </AccordionPanel>
        </Accordion>
      </Box>
    </Box>
  );
};
