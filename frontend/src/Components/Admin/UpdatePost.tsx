import React, { useState } from 'react';

import { useAppDispatch } from '../../store';
import { updateDPost } from '../Posts/PostSlice';
import { Post } from '../Posts/Types/types';

export default function UpdatedPost({
  open,
  post,
}: {
  post: Post;
  open: () => void;
}): JSX.Element {
  const [img, setImg] = useState(post.img);
  const [title, setTitle] = useState(post.title);
  const [description, setDescription] = useState(post.description);

  const dispatch = useAppDispatch();
  const updatedPost = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(updateDPost({ id: post.id, img, title, description }));
    open();
  };
  const addImg = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setImg(e.target.value);
  };

  return (

    <div
      className="block max-w-sm rounded-lg bg-white p-20 shadow-lg dark:bg-neutral-700"
    >
      <form onSubmit={updatedPost}>
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
