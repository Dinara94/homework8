import React from "react";
import Loading from "../../common/components/Loading";
import useUsers from "../hooks/useUsers";
import UsersList from "./UsersList";

function Users() {
  const { users, isLoading } = useUsers();
  return (
    <div>
      <h1>Users</h1>
      {isLoading ? <Loading /> : <UsersList list={users} />}
    </div>
  );
}

export default Users;
