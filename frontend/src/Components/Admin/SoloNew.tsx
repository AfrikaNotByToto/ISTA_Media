import React, { useState } from 'react';
import { OneNews } from '../News/Types/types';
import { useAppDispatch } from '../../store';
import { deleteNews } from '../News/NewsSlice';
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
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={oneNews.img} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{oneNews.title}</h2>
          <p>{oneNews.description}</p>
        </div>
        <div className="flex-col">
          <button
            onClick={del}
            type="button"
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold rounded resize-y"
          >
            Delete
          </button>
          <button
            onClick={open}
            type="button"
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold rounded wd-40 h-5"
          >
            Update
          </button>
        </div>
      </div>
    </>
  );
}

export default NewsSolo;
