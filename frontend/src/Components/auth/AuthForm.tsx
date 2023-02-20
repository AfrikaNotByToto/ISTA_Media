import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import { loginUser } from './authRegSlice';

function Authorization(): JSX.Element {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();
  const nav = useNavigate();
  const { user, message } = useSelector((store: RootState) => store.users);
  useEffect(() => {
    if ('userName' in user) {
      nav('/adminPage');
    }
  }, [user]);
  const login = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(loginUser({ userName, password }));
  };
  return (
    <div className="form__container">
      <form
        onSubmit={login}
        className="form__body"
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <label htmlFor="type">Логин</label>
        <input
          id="type"
          name="userName"
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <label htmlFor="img">Password</label>
        <input
          id="img"
          name="password"
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Авторизироваться</button>
        <h2>{message}</h2>
      </form>
    </div>
  );
}

export default Authorization;
