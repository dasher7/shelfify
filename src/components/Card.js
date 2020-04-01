import React from "react";
import { Box, Heading, Text } from "grommet";

export const Card = ({ title, description, category }) => {
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
          <Heading level="3">{title}</Heading>
        </Box>

        {/* <Image fit="contain" src={require("../images/the-english-game.jpeg")} /> */}
        <Text>{description}</Text>
        <Box
          flex
          direction="row"
          pad={{ top: "small", bottom: "small" }}
          gap="small"
          align="center"
          justify="end"
        >
          <Text color="grey">{category}</Text>
          <Text color="grey">Netflix</Text>
          <Text color="grey">Series</Text>
        </Box>
      </Box>
    </div>
  );
};
