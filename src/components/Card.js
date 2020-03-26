import React from "react";
import { Box, Heading, Image, Text } from "grommet";

export const Card = props => {
  return (
    <div>
      <Box
        height="medium"
        width="medium"
        align="center"
        pad="small"
        border={{ color: "black", side: "all", size: "small" }}
        elevation="small"
      >
        <Heading level="3">The English Game</Heading>
        <Image src="../../public/logo192.png" />
        <Text textAlign="center">
          The English Game is a historical sports drama television miniseries
          developed by Julian Fellowes for Netflix about the origins of modern
          football in England. The six-part series was released on 20 March
          2020.
        </Text>
        <Box flex direction="row" gap="small" align="center" justify="end">
          <Text color="grey">Multimedia</Text>
          <Text color="grey">Netflix</Text>
          <Text color="grey">Series</Text>
        </Box>
      </Box>
    </div>
  );
};
