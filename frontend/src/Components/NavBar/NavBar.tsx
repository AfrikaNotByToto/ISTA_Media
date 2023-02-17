import React from 'react';

import { NavLink, Outlet } from 'react-router-dom';

export default function NavBar(): JSX.Element {
  const user = {
    idi: 1,
  };
  return (
    <>
      <nav className="flex flex-col justify-center items-center py-3 bg-black text-white shadow-lg navbar navbar-expand-lg navbar-light">
        <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
          <div className="flex-1 flex justify-between mr-auto">
            <NavLink className="text-xl text-white" to="/">
              <img src="/img/2023-02-16 16.27.36.jpg" style={{ height: '30px' }} alt="" />
            </NavLink>
            {!user ? (
              <div
                className="flex space-evenly "
                style={{ width: '25%', justifyContent: 'space-between' }}
              >
                <div>Admin Panel</div>
              </div>
            ) : (
              <div
                className="flex space-evenly "
                style={{ width: '25%', justifyContent: 'space-between' }}
              >
                <NavLink className="text-xl text-white" to="/about">
                  О нас
                </NavLink>
                <NavLink className="text-xl text-white" to="/cases">
                  Кейсы
                </NavLink>
                <NavLink className="text-xl text-white" to="/news">
                  Новости
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
