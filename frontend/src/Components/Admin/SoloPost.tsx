import React, { useState } from 'react';
import { useAppDispatch } from '../../store';
import { deletePosts } from '../Posts/PostSlice';
import { Post } from '../Posts/Types/types';
import UpdatedPost from './UpdatePost';

function SoloPost({ post }: { post: Post }): JSX.Element {
  const [modal, setModal] = useState(false);
  const open = (): void => {
    setModal((prev) => !prev);
  };
  const dispatch = useAppDispatch();
  const del = (): void => {
    dispatch(deletePosts(post.id));
  };
  return (
    <div className="carousel-item">
      <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={post.img}
          alt="..."
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {post.title}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {post.description}
          </p>
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
      {modal && <UpdatedPost open={open} post={post} />}
    </div>
  );
}

export default SoloPost;
