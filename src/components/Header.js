import React from "react";
import { Anchor, Nav, Box, Heading } from "grommet";
import { Home, Notification, ChatOption } from "grommet-icons";

export const Header = ({ gridArea }) => (
  <Box
    gridArea={gridArea}
    color="red"
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="brand"
    pad={{ left: "medium", right: "small", vertical: "small" }}
    elevation="medium"
    style={{ zIndex: "1" }}
  >
    <Heading>SHELFIFY</Heading>
    <Nav direction="row" background="brand" pad="medium">
      <Anchor icon={<Home />} hoverIndicator />
      <Anchor icon={<Notification />} hoverIndicator />
      <Anchor icon={<ChatOption />} hoverIndicator />
    </Nav>
  </Box>
);
