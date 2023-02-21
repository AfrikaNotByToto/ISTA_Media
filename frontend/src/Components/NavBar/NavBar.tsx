import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { Link, NavLink, Outlet } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../store';
import { LogoutCheck } from '../auth/authRegSlice';

export default function NavBar(): JSX.Element {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { user } = useSelector((store: RootState) => store.users);
  const dispatch = useAppDispatch();
  const vixod = (): void => {
    dispatch(LogoutCheck());
  };
  return (
    <>
      <div className="flex container-fluid flex-auto flex-wrap items-center justify-between py-8 mx-auto">
        <nav className="flex-auto py-3 bg-black text-white shadow-lg navbar navbar-expand-lg navbar-light">
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
                <NavLink className="text-xl text-white" to="/admin">
                  <div onClick={vixod}>Выйти</div>
                </NavLink>
              </div>
            </>
          ) : (
            <>
              <section
                className="MOBILE-MENU flex lg:hidden"
                style={{ justifyContent: 'flex-end' }}
              >
                <div
                  className="HAMBURGER-ICON space-y-2"
                  onClick={() => setIsNavOpen((prev) => !prev)}
                >
                  <span className="block h-0.5 w-8 animate-pulse bg-gray-600" />
                  <span className="block h-0.5 w-8 animate-pulse bg-gray-600" />
                  <span className="block h-0.5 w-8 animate-pulse bg-gray-600" />
                </div>

                <div className={isNavOpen ? 'showMenuNav' : 'hideMenuNav'}>
                  <div
                    className="absolute top-0 right-0 px-8 py-8"
                    onClick={() => setIsNavOpen(false)}
                  >
                    <svg
                      className="h-8 w-8 text-gray-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </div>
                  <ul className="flex flex-col items-center justify-between min-h-[250px]">
                    <li
                      className="border-b border-gray-400 my-8 uppercase "
                      style={{ color: 'black' }}
                    >
                      <a href="/about">About</a>
                    </li>
                    <li
                      className="border-b border-gray-400 my-8 uppercase"
                      style={{ color: 'black' }}
                    >
                      <a href="/portfolio">Portfolio</a>
                    </li>
                    <li
                      className="border-b border-gray-400 my-8 uppercase"
                      style={{ color: 'black' }}
                    >
                      <a href="/contact">Contact</a>
                    </li>
                  </ul>
                </div>
              </section>
              <ul
                className="DESKTOP-MENU hidden flex-auto space-x-8 lg:flex"
                style={{ justifyContent: 'flex-end' }}
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
              </ul>
            </>
          )}
        </nav>
        <style>
          {`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}{' '}
        </style>
      </div>
      <Outlet />
    </>
  );
}
