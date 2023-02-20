import React from 'react';
import { useSelector } from 'react-redux';

import { Link, NavLink, Outlet } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../store';
import { LogoutCheck } from '../auth/authRegSlice';

export default function NavBar(): JSX.Element {
  const { user } = useSelector((store: RootState) => store.users);
  const dispatch = useAppDispatch();
  const vixod = (): void => {
    dispatch(LogoutCheck());
  };
  return (
    <>
      <nav className="flex flex-col justify-center items-center py-3 bg-black text-white shadow-lg navbar navbar-expand-lg navbar-light">
        <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
          <div className="flex-1 flex justify-between mr-auto">
            <NavLink className="text-xl text-white" to="/">
              <img src="/img/2023-02-16 16.27.36.jpg" style={{ height: '30px' }} alt="" />
            </NavLink>
            {'id' in user ? (
              <>
                <NavLink className="text-xl text-white" to="/adminPage">
                  <img
                    src="/img/2023-02-16 16.27.36.jpg"
                    style={{ height: '30px' }}
                    alt=""
                  />
                </NavLink>
                <div
                  className="flex space-evenly "
                  style={{ width: '25%', justifyContent: 'space-between' }}
                >
                  <div>Admin Panel</div>
                  <NavLink className="text-xl text-white" to="/registration">
                    <div>Регистрация</div>
                  </NavLink>
                  <NavLink className="text-xl text-white" to="/">
                    <div onClick={vixod}>Выйти</div>
                  </NavLink>
                </div>
              </>
            ) : (
              <div
                className="flex space-evenly "
                style={{ width: '25%', justifyContent: 'space-between' }}
              >
                <Link className="text-xl text-white" to="/about">
                  О нас
                </Link>
                <Link className="text-xl text-white" to="/cases">
                  Кейсы
                </Link>
                <Link className="text-xl text-white" to="/news">
                  Новости
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
