import React, { useState } from 'react';

import { useAppDispatch } from '../../store';
import { addPosts } from '../Posts/PostSlice';

export default function AddPostss(): JSX.Element {
  const [modal, setModal] = useState(false);
  const [img, setImg] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const dispatch = useAppDispatch();
  const addPost = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(addPosts({ img, title, description }));
    setTitle('');
    setDescription('');
    setImg('');
  };
  const addImg = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setImg(e.target.value);
  };
  return (
    <>
      <div>
        <button
          type="button"
          onClick={() => setModal(!modal)}
          className="text-white bg-white hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Добавить кейс
        </button>
      </div>
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
          <form className="bg-pink-400" style={{ zIndex: 1 }} onSubmit={addPost}>
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
                onChange={addImg}
                value={img}
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
                onChange={(e) => setTitle(e.target.value)}
                value={title}
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
                onChange={(e) => setDescription(e.target.value)}
                value={description}
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
