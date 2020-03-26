import React from "react";
import { Box, Heading, Image, Text, Button } from "grommet";

export const Card = () => {
  return (
    <>
      <Box margin={{ top: "small", bottom: "small" }} pad="small">
        <Box direction="row">
          <Text size="xlarge" weight="bold">
            DIO PORCO
          </Text>
        </Box>
        <Box direction="row" align="center" justify="start">
          <Box margin={{ bottom: "small" }} align="center">
            <Text weight={600}>dio poroco</Text>
            <Text>dio proco</Text>
          </Box>
          <Box margin="small">
            <Box direction="row">
              <Text>DIO PORCO</Text>
            </Box>
            <Box direction="row" margin={{ top: "small", bottom: "small" }}>
              <Button
                margin={{ right: "small" }}
                label="Complete"
                color="status-ok"
                onClick={() => alert()}
              />
              <Button
                label="Delete"
                color="status-error"
                onClick={() => alert()}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
