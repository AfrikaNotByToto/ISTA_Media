import React, { useState } from 'react';

import { useAppDispatch } from '../../store';
import { OneNews } from '../News/Types/types';
import { updatedNews } from '../News/NewsSlice';

export default function UpdatedNew({
  open,
  oneNews,
}: {
  oneNews: OneNews;
  open: () => void;
}): JSX.Element {
  const [img, setImg] = useState(oneNews.img);
  const [title, setTitle] = useState(oneNews.title);
  const [description, setDescription] = useState(oneNews.description);
  const [url, setUrl] = useState(oneNews.url);

  const dispatch = useAppDispatch();
  const updNew = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(updatedNews({ id: oneNews.id, img, title, description, url }));
    open();
  };
  const addImg = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setImg(e.target.value);
  };

  return (

    <div
      className="block max-w-sm rounded-lg bg-white p-5 shadow-lg dark:bg-neutral-700"
    >
      <form onSubmit={updNew}>
        <center>
          <div className="relative mb-12" data-te-input-wrapper-init>
            <input
              style={{ backgroundColor: 'white', color: 'black' }}
              type="text"
              id="img"
              placeholder="Вставьте ссылку на картинку"
              name="img"
              defaultValue={img}
              onChange={addImg}
            />

          </div>
          <div className="relative mb-12" data-te-input-wrapper-init>
            <input
              style={{ backgroundColor: 'white', color: 'black' }}
              type="text"
              id="title"
              placeholder="Заголовок"
              name="title"
              defaultValue={title}
              onChange={(e) => setTitle(e.target.value)}
            />

          </div>
          <div className="relative mb-12" data-te-input-wrapper-init>
            <input
              style={{ backgroundColor: 'white', color: 'black' }}
              type="text"
              id="description"
              placeholder="Описание"
              name="description"
              defaultValue={description}
              onChange={(e) => setDescription(e.target.value)}
            />

          </div>
          <div className="relative mb-12" data-te-input-wrapper-init>
            <input
              style={{ backgroundColor: 'white', color: 'black' }}
              type="text"
              id="url"
              placeholder="Описание"
              name="url"
              defaultValue={url}
              onChange={(e) => setUrl(e.target.value)}
            />

          </div>
          <div className="flex justify-evenly">
            <button
              className="shadow-2xl py-2 px-7 bg-blue-700 text-white rounded hover:bg-blue-800"
              type="submit"
            >
              Изменить
            </button>
          </div>
        </center>
      </form>
    </div>
  );
}
