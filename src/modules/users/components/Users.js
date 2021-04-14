import React from "react";
import {
  Route,
  Switch,
  useRouteMatch
} from "react-router-dom";

import UsersListPage from "./UsersListPage";
import UserForm from "./UserForm";

function Users() {
    const { path } = useRouteMatch();
    console.log(path);

  return (
    <Switch>
      <Route path={ path } exact component={UsersListPage} />
      <Route path={ path + '/:userId' } component={UserForm} />
      <Route path={ path + '/edit' } exact component={UserForm} />
    </Switch>
  );
}

export default Users;
