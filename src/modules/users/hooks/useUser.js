import { useEffect, useState } from 'react';
import { getUser } from '../services/userService';

export function useUser(userId) {
    const [user, setUser] = useState([]);

    useEffect(() => {
        getUser(userId).then(({ data }) => setUser(data));
    }, []);

    return { user };
}