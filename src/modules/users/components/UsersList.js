import React from "react";
import UserListItem from "./UserListItem";
import { Container } from "@material-ui/core";

function UsersList({ list, onSelect, onDelete }) {
  return (
    <Container maxWidth="sm">
      {list.map((user) => (
        <UserListItem
          key={user.id}
          user={user}
          onSelect={onSelect}
          onDelete={onDelete}
        />
      ))}
    </Container>
  );
}

export default UsersList;
