import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { useHistory, useParams } from 'react-router-dom';
import { useUser } from "../hooks/useUser";
import "./UseForm.css";

export function UserForm({ onSave }) {
  const history = useHistory();
  const { userId } = useParams();
  const { user } = useUser(userId);
  const [thisUser, setThisUser] = useState(user);

  const onUserFormSubmit = (e) => {
    e.preventDefault();
    onSave(thisUser);
  };

  const onChange = (e) => {
    setThisUser({ ...thisUser, [e.target.name]: e.target.value });
  };

  function onBackBtnClick() {
     history.goBack();
}

  return (
    <form action="" className="contact-form" onSubmit={onUserFormSubmit}>
      <h2 className="form-title">User Details</h2>
      <div className="row">
        <label htmlFor="nameInput" className="label">
          Name
        </label>
        <TextField
          type="text"
          name="name"
          id="nameInput"
          value={thisUser.name}
          onChange={onChange}
          variant="standard"
          color="secondary"
        />
      </div>

      <div className="row">
        <label htmlFor="surnameInput" className="label">
          Phone
        </label>
        <TextField
          type="text"
          name="phone"
          id="phoneInput"
          value={thisUser.phone}
          onChange={onChange}
          variant="standard"
          color="secondary"
        />
      </div>

      <div className="row">
        <label htmlFor="phoneInput" className="label">
          Email
        </label>
        <TextField
          type="text"
          name="email"
          id="emailInput"
          value={thisUser.email}
          onChange={onChange}
          variant="standard"
          color="secondary"
        />
      </div>

      <div className="buttons">
        <Button
          type="submit"
          className="button"
          variant="contained"
          color="primary"
        >
          Save
        </Button>
        <Button
          type="button"
          className="button"
          onClick={onBackBtnClick}
          variant="contained"
          color="secondary"
        >
          Cancel
        </Button>
      </div>
    </form>
  );
}

export default UserForm;
