import { useCallback, useEffect, useState } from "react";
import {
  getUsersList,
  createUser,
  updateUser,
  removeUser,
} from "../services/usersService";

export default function useUsers() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useBoolean(false);

  const refresh = useCallback(() => {
    setIsLoading(true);

    getUsersList().then(({ data }) => {
      setUsers(data);
      setIsLoading(false);
    });
  }, [setIsLoading]);

  const save = useCallback(
    (data) => {
      setIsLoading(true);

      if (data.id) {
        updateUser(data).then(({ data }) => {
          setUsers((users) =>
            users.map((item) => (item.id === data.id ? data : item))
          );
          setIsLoading(false);
        });
      } else {
        createUser(data).then(({ data }) => {
          setUsers((users) => [...users, data]);
          setIsLoading(false);
        });
      }
    },
    [setIsLoading]
  );

  const remove = useCallback(
    (id) => {
      setIsLoading(true);

      removeUser(id).then(() => {
        setUsers((users) => users.filter((item) => item.id !== id));
        setIsLoading(false);
      });
    },
    [setIsLoading]
  );

  useEffect(refresh, [refresh]);

  return { users, isLoading, refresh, save, remove };
}
