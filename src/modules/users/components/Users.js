import React from "react";
import { /* useEffect,  */ useState } from "react";
import Loading from "../../common/components/Loading";
import useUsers from "../hooks/useUsers";
import UsersList from "./UsersList";
import UserForm from "./UserForm";
import { Button } from "@material-ui/core";

function Users() {
  const { users, isLoading } = useUsers();
  const [openForm, setOpenForm] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});

  const emptyUser = {
    fullName: "",
    phone: "",
    email: "",
  };

  const onAddNewUser = () => {
    setSelectedUser(emptyUser);
    openFormFunc();
  };

  const onUserSelect = (user) => {
    setSelectedUser(user);
    openFormFunc();
  };

  const onDelete = (user) => {
    console.log(user);
  };

  const onSave = (user) => {
    console.log(user);
  };

  const openFormFunc = () => {
    setOpenForm(true);
  };

  const closeFormFunc = () => {
    setOpenForm(false);
  };

  return (
    <div>
      {openForm ? (
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
                onDelete={onDelete}
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
    "margin": "50px auto"
  }
}

export default Users;
