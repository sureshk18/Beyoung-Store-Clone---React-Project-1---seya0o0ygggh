import React from "react";
import "../styles/Upcoming.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

function Upcoming() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    ...theme.applyStyles("dark", {
      backgroundColor: "#1A2027",
    }),
  }));
  return (
    <div className="container-box">
     
        <Grid item xs={12} container spacing={2}>
          <Grid item xs={12} md={6} sm={6} lg={3}>
            <Paper>Content 1</Paper>
          </Grid>
          <Grid item xs={12} md={6} sm={6} lg={3}>
            <Paper>Content 2</Paper>
          </Grid>
          <Grid item xs={12} md={6} sm={6} lg={3}>
            <Paper>Content 1</Paper>
          </Grid>
          <Grid item xs={12} md={6} sm={6} lg={3}>
            <Paper>Content 2</Paper>
          </Grid>
        </Grid>
   
    </div>
  );
}

export default Upcoming;
