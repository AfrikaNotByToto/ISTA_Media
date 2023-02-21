import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../store';
import SoloPost from './SoloPost';
import { initPosts } from '../Posts/PostSlice';

function PostList(): JSX.Element {
  // const { postId } = useParams();
  const { posts, error } = useSelector((store: RootState) => store.posts);
  const dispatch = useAppDispatch();
  useEffect((): void => {
    dispatch(initPosts());
  }, []);
  return (
    <div>
      {posts ? (
        <div className="grid grid-cols-3 gap-3 justify-center" style={{ marginLeft: '7rem' }}>

          {posts.map((post) => (
            <SoloPost key={post.id} post={post} />
          ))}

        </div>
      ) : (
        <>
          <div>YOU OBOSRALSIA</div>
          <div>{error}</div>
        </>
      )}
    </div>
  );
}

export default PostList;
