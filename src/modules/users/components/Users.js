import React from "react";
import { useEffect, useState } from "react";
import Loading from "../../common/components/Loading";
import useUsers from "../hooks/useUsers";
import UsersList from "./UsersList";
import UserForm from "./UserForm";

function Users() {
  const { users, isLoading } = useUsers();
  const [openForm, setOpenForm] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});

  const getEmptyUser = {
    fullName: "",
    phone: "",
    email: "",
  };

  const onAddNewBtnClick = () => {
    setSelectedUser(getEmptyUser);
    openForm();
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
      <h1>Users</h1>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <UsersList list={users} onSelect={onUserSelect} onDelete={onDelete} />
          <button onClick={onAddNewBtnClick}>Add new user</button>
        </>
      )}
      <UserForm
        key={selectedUser.id}
        user={selectedUser}
        onCancel={closeFormFunc}
        onSave={onSave}
      ></UserForm>
    </div>
  );
}

export default Users;
