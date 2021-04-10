import React from "react";
import { useEffect, useState } from "react";

export function UserForm({ user, onCancel, onSave }) {
  const [thisUser, setThisUser] = useState(user);
  /*     shouldComponentUpdate(nextProps, nextState) {
        return this.state.name !== nextState.name;
    } */

  const onUserFormSubmit = (e) => {
    e.preventDefault();
    onSave(thisUser);
  };

  const onChange = (e) => {
    /* this.setState({
            [e.target.name]: e.target.value,
        }); */
    console.log(e.target.value);
  };

  return (
    <form action="" className="contact-form" onSubmit={onUserFormSubmit}>
      <h2>User Details</h2>
      <label htmlFor="nameInput">Full name</label>
      <input
        type="text"
        name="name"
        id="nameInput"
        value={thisUser.name}
        onChange={onChange}
      />
      <br />

      <label htmlFor="surnameInput">Surname</label>
      <input
        type="text"
        name="surname"
        id="surnameInput"
        value={thisUser.surname}
        onChange={onChange}
      />
      <br />

      <label htmlFor="phoneInput">Phone</label>
      <input
        type="text"
        name="phone"
        id="phoneInput"
        value={thisUser.phone}
        onChange={onChange}
      />

      <div className="buttons">
        <button type="submit" className="pull-right">
          Save
        </button>
        <button type="button" className="pull-left" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}

export default UserForm;
