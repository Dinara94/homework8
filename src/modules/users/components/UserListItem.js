import React from "react";
import { Grid, Button } from "@material-ui/core";

function UserListItem({ user, onSelect, onDelete }) {
  const onDeleteClick = (e) => {
    e.preventDefault();

    onDelete(user);
};

  return (
    <Grid container direction="row" spacing={0} alignItems="center">
      <Grid container item xs={2} spacing={0}>
        <p>{user.name}</p>
      </Grid>
      <Grid container item xs={2} spacing={0}>
        <p>{user.phone}</p>
      </Grid>
      <Grid container item xs={2} spacing={0}>
        {" "}
        <p>{user.email}</p>
      </Grid>
      <Grid container item xs={2} spacing={0}>
        <p>{user.website}</p>
      </Grid>
      <Grid container item xs={2} spacing={0}>
        <Button variant="contained" color="primary" onClick={onSelect.bind(null, user)}>
          Edit
        </Button>
      </Grid>
      <Grid container item xs={2} spacing={0}>
        <Button variant="contained" color="secondary" onClick={onDeleteClick}>
          Delete
        </Button>
      </Grid>
    </Grid>
  );
}

export default UserListItem;
