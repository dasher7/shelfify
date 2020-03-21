import React from "react";
import { Grid, Box, makeStyles, CssBaseline } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh",
    margin: 0,
    padding: 0
  }
}));

export const Home = () => {
  const style = useStyles();

  return (
    <Grid container component="main" className={style.root}>
      <CssBaseline />
      <Box width={1 / 4} bgcolor="blue">
        <h1>Hello</h1>
      </Box>
      <Box width={3 / 4} bgcolor="red">
        <h2>Hello</h2>
      </Box>
    </Grid>
  );
};
