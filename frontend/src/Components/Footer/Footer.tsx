import React, { useState } from 'react';
import * as api from '../../App/api';

function Footer(): JSX.Element {
  const [msg, setMsg] = useState('');
  // const [error, setError] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    if (msg) {
      api.sendMessageTelegram({ msg });
      setMsg('');
      // setError(false);
    }
  };

  return (
    <footer className="flex justify-center px-4 text-gray-100 bg-black">
      <div className="container py-6">
        <h1 className="text-center text-lg font-bold lg:text-xl">
          Свяжитесь с нами <br />
        </h1>

        <div className="flex justify-center mt-6">
          <div className="bg-white rounded-lg">
            <div className="flex flex-wrap justify-between md:flex-row">
              <input
                type="phone"
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                className="m-1 p-2 appearance-none text-gray-700 text-sm focus:outline-none"
                placeholder="Введите телефон"
              />
              <button
                type="button"
                onClick={handleClick}
                className="w-full m-1 p-2 text-sm bg-blue-700 rounded-lg font-semibold uppercase transition hover:border-blue-800 hover:bg-blue-800 focus:outline-none focus:ring-blue-800 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-blue-700 lg:w-auto"
              >
                отправить
              </button>
            </div>
          </div>
        </div>
        <hr className="h-px mt-6 bg-gray-700 border-none" />

        <div className="flex flex-col items-center justify-between mt-6 md:flex-row">
          <div>
            <img
              style={{ width: '15rem' }}
              src="/img/2023-02-16 16.27.36.jpg"
              alt="logo"
            />
            <a className="px-2 text-sm">2021 ©</a>
          </div>
          <div className="flex mt-4 md:m-0">
            <div className="-mx-4">
              <a className="px-8 text-lg">ista@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
