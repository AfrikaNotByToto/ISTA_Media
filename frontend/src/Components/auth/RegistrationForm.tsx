import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../store';
import { registrUser } from './authRegSlice';

function Registration(): JSX.Element {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();
  const nav = useNavigate();
  const { user, message } = useSelector((store: RootState) => store.users);
  console.log(user);
  useEffect(() => {
    if ('userName' in user) {
      nav('/adminPage');
    }
  }, [user]);
  const registr = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(registrUser({ userName, password }));
  };
  return (
    <div className="form__container">
      <form
        className="form__body"
        style={{ display: 'flex', flexDirection: 'column' }}
        onSubmit={registr}
      >
        <label htmlFor="name">userName</label>
        <input
          id="name"
          name="userName"
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Зарегистрироваться</button>
        <h2>{message}</h2>
      </form>
    </div>
  );
}

export default Registration;
