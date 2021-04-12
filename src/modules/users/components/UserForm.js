import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import "./UseForm.css";

export function UserForm({ user, onCancel, onSave }) {
  const [thisUser, setThisUser] = useState(user);

  const onUserFormSubmit = (e) => {
    e.preventDefault();
    onSave(thisUser);
  };

  const onChange = (e) => {
    setThisUser({ ...thisUser, [e.target.name]: e.target.value });
  };

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
          onClick={onCancel}
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
