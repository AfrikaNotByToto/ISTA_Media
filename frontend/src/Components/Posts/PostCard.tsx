import React from 'react';
import { Post } from './Types/types';

function PostCard({ post }: { post: Post }): JSX.Element {
  return (
    <div>
      <img src={`${post.img}`} alt="картинка" />
      <p>{post.title}</p>
      <div>{post.description}</div>
    </div>
  );
}

export default PostCard;
