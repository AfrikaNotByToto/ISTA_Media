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
    <>
      {modal && <UpdatedPost open={open} post={post} />}

      <div
        style={{ height: '500px', width: '450px' }}
        className="max-w-sm rounded overflow-hidden "
      >
        <center>

          <div className="flex justify-center">
            <div
              className="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700"
            >
              <center>
                <img
                  style={{ width: '250px', height: '250px', marginTop: '1rem' }}
                  className="rounded-t-lg"
                  src={post.img}
                  alt=""
                />
              </center>

              <div className="p-6">
                <h5
                  className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50"
                >
                  {post.title}
                </h5>
                <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                  {post.description}
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
        </center>
      </div>

    </>
  );
}

export default SoloPost;
