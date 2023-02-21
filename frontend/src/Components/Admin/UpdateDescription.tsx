import React, { useState } from 'react';

import { useAppDispatch } from '../../store';
import { Description } from '../AboutUs/Types/type';
import { updateDescriptions } from '../AboutUs/descriptionSlicer';

export default function UpdatedDescription({
  open,
  description,
}: {
  description: Description;
  open: () => void;
}): JSX.Element {
  const [img, setImg] = useState(description.img);
  const [body, setBody] = useState(description.body);

  const dispatch = useAppDispatch();
  const updatedDescriptionOne = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(updateDescriptions({ id: description.id, img, body }));
    open();
  };
  const addImg = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setImg(e.target.value);
  };

  return (
    <div className="fixed z-10 overflow-y-auto top-0 w-full left-0">
      <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-900 opacity-75" />
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
          &#8203;
        </span>
        <div
          className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <form className="bg-pink-400" onSubmit={updatedDescriptionOne}>
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
                defaultValue={img}
                onChange={addImg}
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
                defaultValue={body}
                onChange={(e) => setBody(e.target.value)}
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
      </div>
    </div>
  );
}
