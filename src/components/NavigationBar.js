import React, { useState } from "react";
import { Box, Button, Heading } from "grommet";
import { Paint, User, SettingsOption } from "grommet-icons";

export const NavigationBar = props => {
  return (
    <Box
      tag="header"
      direction="row"
      background="brand"
      pad={{ left: "medium", vertical: "small", right: "small" }}
      align="center"
      elevation="medium"
      style={{ zIndex: 1 }}
    >
      <Heading margin={{ left: "xlarge" }} level="2">
        Shelfify
      </Heading>
      <Box flex direction="row" align="center" justify="end">
        <Button icon={<User />} />
        <Button icon={<Paint />} />
        <Button icon={<SettingsOption />} />
      </Box>
    </Box>
  );
};
