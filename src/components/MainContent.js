import React, { useState } from "react";
import { Box, Calendar, Button, Layer, Heading } from "grommet";
import { Card } from "./Card";
import { AddCircle, FormClose } from "grommet-icons";

export const MainContent = props => {
  const [showNewCardForm, setShoeNewCardForm] = useState(false);

  return (
    <Box
      flex
      pad="medium"
      align="start"
      gap="small"
      overflow="auto"
      background={{ color: "#2C3743" }}
    >
      <Box direction="row" alignSelf="end" pad={{ right: "small" }}>
        <Button
          icon={<AddCircle></AddCircle>}
          label="Add Card"
          onClick={() => setShoeNewCardForm(true)}
        ></Button>
      </Box>
      <Box gap="medium" direction="row">
        {/**overflow="auto" */}
        <Card />
        <Card />
      </Box>
      {/*  <Box gap="medium" direction="row" overflow="auto">
        <Card />
        <Card />
        <Card />
        <Card />
      </Box> */}
      {showNewCardForm && (
        <Layer>
          <Box direction="row" alignSelf="end" gap="small">
            <Button
              icon={<FormClose></FormClose>}
              onClick={() => setShoeNewCardForm(false)}
            ></Button>
          </Box>
          <Heading>Hello</Heading>
        </Layer>
      )}
    </Box>
  );
};
