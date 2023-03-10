import React, { useState } from 'react';

import { useAppDispatch } from '../../store';
import { addDescriptions } from '../AboutUs/descriptionSlicer';

export default function AddDescription(): JSX.Element {
  const [img, setImg] = useState('');
  const [body, setBody] = useState('');

  const dispatch = useAppDispatch();
  const addedDescription = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(addDescriptions({ img, body }));
    setBody('');
    setImg('');
  };
  return (
    <div className="block max-w-4/5 rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700">
      <h3>Форма добавления о нас</h3>
      <form onSubmit={addedDescription}>
        <div className="relative mb-6">
          <input
            type="text"
            className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-black [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="img"
            name="img"
            value={img}
            onChange={(e) => setImg(e.target.value)}
          />
          <label
            htmlFor="img"
            className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
          >
            Ссылка на картинку
          </label>
        </div>
        <div className="relative mb-6" data-te-input-wrapper-init>
          <input
            type="text"
            className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="body"
            name="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          <label
            htmlFor="body"
            className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
          >
            Описание
          </label>
        </div>
        <button
          type="submit"
          className="w-full rounded bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          Добавить
        </button>
      </form>
    </div>
  );
}
