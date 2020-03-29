import React from "react";
import { Box, Heading, Image, Text } from "grommet";

export const Card = props => {
  return (
    <div>
      <Box
        width="medium"
        align="start"
        pad="small"
        round="small"
        background={{ color: "#CCD7CE" }}
        border={{ color: "black", side: "all", size: "small" }}
      >
        <Box direction="row" align="center" gap="small">
          <Text color="grey">Title:</Text>
          <Heading level="3">The English Game</Heading>
        </Box>

        {/* <Image fit="contain" src={require("../images/the-english-game.jpeg")} /> */}
        <Text>
          The English Game is a historical sports drama television miniseries
          developed by Julian Fellowes for Netflix about the origins of modern
          football in England. The six-part series was released on 20 March
          2020.
        </Text>
        <Box
          flex
          direction="row"
          pad={{ top: "small", bottom: "small" }}
          gap="small"
          align="center"
          justify="end"
        >
          <Text color="grey">Multimedia</Text>
          <Text color="grey">Netflix</Text>
          <Text color="grey">Series</Text>
        </Box>
      </Box>
    </div>
  );
};
