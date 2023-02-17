import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../store';
import { initPosts } from './PostSlice';
import PostCard from './PostCard';

function PostPage(): JSX.Element {
  // const { postId } = useParams();
  const state = useSelector((store: RootState) => store.posts.posts);
  const dispatch = useAppDispatch();
  useEffect((): void => {
    dispatch(initPosts());
  }, [dispatch]);
  return (
    <div>
      {state ? (
        <div>
          <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
            {state.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      ) : (
        <>
          <div>YOU OBOSRALSIA</div>
          <div>{state}</div>
        </>
      )}
    </div>
  );
}

export default PostPage;
