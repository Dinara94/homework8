import React from "react";
import UserListItem from "./UserListItem";
import { Container } from "@material-ui/core";

function UsersList({ list }) {
  return (
    <Container maxWidth="sm">
      {list.map((user) => (
        <UserListItem key={user.id} item={user} />
      ))}
    </Container>
  );
}

export default UsersList;
