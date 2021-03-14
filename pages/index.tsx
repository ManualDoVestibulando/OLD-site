import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Layout from "../src/components/Layout";
import { Grid, Paper, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(32, 12),
    border: "0.5rem solid",
    padding: theme.spacing(4),
    maxWidth: "40rem",
    borderColor: theme.palette.primary.main,
  },
}));

const Index = () => {
  const classes = useStyles();
  return (
    <Layout>
      <Paper className={classes.paper}>
        <Typography
          variant="h5"
          align="center"
          color="textSecondary"
          component="p"
        >
          Tudo que você já quis saber sobre o ingresso na USP, em um só lugar.
        </Typography>
      </Paper>
    </Layout>
  );
};
export default Index;
