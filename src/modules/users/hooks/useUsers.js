import { useCallback, useBoolean, useEffect, useState } from "react";
import {
  getUsersList,
  createUser,
  updateUser,
  removeUser,
  getUser,
} from "../services/usersService";

export default function () {
  const [users, setUsers] = useState([]);
  /* const [isLoading, setIsLoading] = useBoolean(false); */


  const refresh = useCallback(() => {
    /* setIsLoading(true); */

    getUsersList().then(({ data }) => {
      setUsers(data);
    /*   setIsLoading(false); */
    });
  }, []);


  const save = useCallback(
    (data) => {
   /*    setIsLoading(true); */

      if (data.id) {
        updateUser(data).then(({ data }) => {
          setUsers((users) =>
            users.map((item) => (item.id === data.id ? data : item))
          );
       /*    setIsLoading(false); */
        });
      } else {
        createUser(data).then(({ data }) => {
          setUsers((users) => [...users, data]);
         /*  setIsLoading(false); */
        });
      }
    },
    []
  );

  const remove = useCallback(
    (id) => {
/*       setIsLoading(true); */

      removeUser(id).then(() => {
        setUsers((users) => users.filter((item) => item.id !== id));
     /*    setIsLoading(false); */
      });
    },
    []
  );

  useEffect(refresh, [refresh]);

  return { users, /* isLoading, */ refresh, save, remove};
}
