import React from "react";
import { Box, Calendar, Heading } from "grommet";

export const MainContent = ({ gridArea }) => {
  return (
    <Box gridArea={gridArea} width="fill" height="xlarge" background="yellow">
      <Box margin="medium">
        <Heading>Content</Heading>
        <Box direction="row" gap="medium">
          {" "}
          <Calendar
            size="small"
            date={new Date().toISOString()}
            onSelect={date => {}}
          />
          <Calendar
            size="small"
            date={new Date().toISOString()}
            onSelect={date => {}}
          />
          <Calendar
            size="small"
            date={new Date().toISOString()}
            onSelect={date => {}}
          />
          <Calendar
            size="small"
            date={new Date().toISOString()}
            onSelect={date => {}}
          />
        </Box>
      </Box>
    </Box>
  );
};
