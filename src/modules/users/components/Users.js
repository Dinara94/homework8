import React from "react";
import { useState } from "react";
import useUsers from '../hooks/useUsers';
import Loading from "../../common/components/Loading";
import UsersList from "./UsersList";
import UserForm from "./UserForm";
import { Button } from "@material-ui/core";


function emptyUser() {
  return {
    fullName: "",
    phone: "",
    email: "",
  }

};

export default function Users() {
  const { users, remove, save, isLoading } = useUsers();
  const [selectedUser, setSelectedUser] = useState(null);
  const isFormVisible = !!selectedUser;

  function onUserSelect(user) {
    setSelectedUser(user);
}

  const onAddNewUser = () => {
    setSelectedUser(emptyUser());
  };

  function onSave(user) {
    save(user);
    closeFormFunc();
}

  const closeFormFunc = () => {
    setSelectedUser(null);
  };

  return (
    <div>
      {isFormVisible ? (
        <UserForm
          key={selectedUser.id}
          user={selectedUser}
          onCancel={closeFormFunc}
          onSave={onSave}
        ></UserForm>
      ) : (
        <>
          {isLoading ? (
            <Loading />
          ) : (
            <>
              <h1>Users</h1>
              <UsersList
                list={users}
                onSelect={onUserSelect}
                onDelete={remove}
              />
              <Button onClick={onAddNewUser} variant="contained" color="default" style={btnStyle()}>Add new user</Button>
            </>
          )}
        </>
      )}
    </div>
  );
}


function btnStyle() {
  return {
    "display": "block",
    "width": "25%",
    "margin": "50px auto",
    "fontWeight": "600"
  }
}
