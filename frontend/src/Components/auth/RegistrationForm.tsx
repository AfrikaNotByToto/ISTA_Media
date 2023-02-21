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
    // <div className="form__container">
    //   <form
    //     className="form__body"
    //     style={{ display: 'flex', flexDirection: 'column' }}
    //     onSubmit={registr}
    //   >
    //     <label htmlFor="name">userName</label>
    //     <input
    //       id="name"
    //       name="userName"
    //       type="text"
    //       value={userName}
    //       onChange={(e) => setUserName(e.target.value)}
    //     />
    //     <label htmlFor="password">Password</label>
    //     <input
    //       id="password"
    //       name="password"
    //       type="password"
    //       value={password}
    //       onChange={(e) => setPassword(e.target.value)}
    //     />
    //     <button type="submit">Зарегистрироваться</button>
    //     <h2>{message}</h2>
    //   </form>
    // </div>

    <center>
      <div style={{ marginTop: '10rem' }} className="w-full max-w-lg ">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={registr}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="userName">
              Имя пользователя
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              name="userName"
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              style={{ color: 'white' }}

            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Пароль
            </label>
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="*********"
              style={{ color: 'white' }}
            />

          </div>
          <div className="flex flex-col items-center">

            <button className="bg-black hover:bg-blue-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Зарегистрироваться
            </button>

            <h2>{message}</h2>
          </div>
        </form>

      </div>
    </center>
  );
}

export default Registration;
