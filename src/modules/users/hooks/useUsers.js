import { useEffect, useState } from "react";
import { getUsersList } from "../services/users";

export default function useUsers() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const { data } = await getUsersList();
      setUsers(data);
    } catch (err) {
      setError(err);
    }

    setIsLoading(false);
  }, []);

  return { users, isLoading, error };
}
