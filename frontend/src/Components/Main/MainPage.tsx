/* eslint-disable max-len */
import React, { useState } from 'react';
import Requests from './Requests';

export default function MainPage(): JSX.Element {
  const [modal, setModal] = useState(false);
  const user = {
    id: 1,
  };
  return (
    <>
      {user && (
        <div>
          <div style={{ marginTop: '150px', marginLeft: '50px' }}>
            <h1
              className="h11"
              style={{ color: 'whitesmoke', fontSize: '50px', fontWeight: 'bolder' }}
            >
              Сделаем ваш бизнес узнаваемым
            </h1>
            <h5 className="h55" style={{ color: 'whitesmoke', fontSize: '30px' }}>
              сотрудничаем с застройщиками,риэлторскими агенствами и отелями
            </h5>
          </div>
          <div className="flex justify-end">
            <img
              src="https://images.squarespace-cdn.com/content/v1/5d0ade01fc40e30001b4a6c5/1611179474887-THCHA3NFBUUQD9DGLOSV/bw+spiral+gif.gif"
              alt=""
              style={{ height: '100%' }}
            />
          </div>
        </div>
      )}

      <div
        className="flex"
        style={{
          marginTop: '65px',
          marginLeft: '50px',
          height: '55px',
          width: 'auto',
        }}
      >
        <button
          type="button"
          onClick={() => setModal(!modal)}
          className="text-white bg-white hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Добавить кейс
        </button>
      </div>
      {!modal && <Requests />}
      {modal && (
        <div
          className="container mx-auto"
          style={{
            marginTop: '65px',
            marginLeft: '195px',
            height: '55px',
            width: 'auto',
          }}
        >
          <form className="bg-pink-400" style={{ zIndex: 1 }}>
            <div className="mb-6">
              <label
                htmlFor="img"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Картинка
              </label>
              <input
                type="text"
                id="img"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Вставьте ссылку на картинку"
                name="img"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="title"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Заголовок
              </label>
              <input
                type="text"
                id="title"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Заголовок"
                name="title"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Описание
              </label>
              <input
                type="text"
                id="description"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Описание"
                name="description"
                required
              />
            </div>
            <button
              type="submit"
              className="text-white bg-white hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Добавить
            </button>
          </form>
        </div>
      )}
    </>
  );
}
