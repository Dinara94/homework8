import React from "react";
import { Grid, Button } from "@material-ui/core";

function UserListItem({ item }) {
  return (
    <Grid container direction="row" spacing={0} alignItems="center">
      <Grid container item xs={2} spacing={0}>
        <p>{item.name}</p>
      </Grid>
      <Grid container item xs={2} spacing={0}>
        <p>{item.phone}</p>
      </Grid>
      <Grid container item xs={2} spacing={0}>
        {" "}
        <p>{item.email}</p>
      </Grid>
      <Grid container item xs={2} spacing={0}>
        <p>{item.website}</p>
      </Grid>
      <Grid container item xs={2} spacing={0}>
        <Button variant="contained" color="primary">
          Edit
        </Button>
      </Grid>
      <Grid container item xs={2} spacing={0}>
        <Button variant="contained" color="secondary">
          Delete
        </Button>
      </Grid>
    </Grid>
  );
}

export default UserListItem;
