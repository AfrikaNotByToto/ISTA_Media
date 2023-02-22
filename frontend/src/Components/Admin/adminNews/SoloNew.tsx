import React, { useState } from 'react';
import { OneNews } from '../../News/Types/types';
import { useAppDispatch } from '../../../store';
import { deleteNews } from '../../News/NewsSlice';
import UpdatedNew from './UpdateNews';

function NewsSolo({ oneNews }: { oneNews: OneNews }): JSX.Element {
  const [modal, setModal] = useState(false);
  const open = (): void => {
    setModal((prev) => !prev);
  };
  const dispatch = useAppDispatch();
  const del = (): void => {
    dispatch(deleteNews(oneNews.id));
  };
  return (
    <>
      {modal && <UpdatedNew open={open} oneNews={oneNews} />}
      <div className="flex justify-center">
        <div className="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
          <a href="#!">
            <img className="rounded-t-lg" src={oneNews.img} alt="" />
          </a>
          <div className="p-6">
            <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              {oneNews.title}
            </h5>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              {oneNews.description}
            </p>
            <div className="flex justify-evenly">
              <button
                className="shadow-2xl py-2 px-7 bg-blue-700 text-white rounded hover:bg-blue-800"
                onClick={del}
                type="button"
              >
                Удалить
              </button>
              <button
                className="shadow-2xl py-2 px-7 bg-blue-700 text-white rounded hover:bg-blue-800"
                onClick={open}
                type="button"
              >
                Редактировать
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsSolo;
