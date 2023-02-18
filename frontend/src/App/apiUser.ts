import { State, User } from '../Components/auth/Types/types';

export const loginUser = async (users: User): Promise<State> => {
  const res = await fetch('http://localhost:4000/api/auth/sign-in', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({
      userName: users.userName,
      password: users.password,
    }),
  });
  return res.json();
};

export const regUser = async (newUser: User): Promise<State> => {
  const res = await fetch('http://localhost:4000/api/auth/sign-up', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({
      userName: newUser.userName,
      password: newUser.password,
    }),
  });
  return res.json();
};
