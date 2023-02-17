import React from 'react';
import AddPostss from './AddPosts';
import PostList from './PostList';

export default function AdminPage(): JSX.Element {
  return (
    <div>
      <div>
        <AddPostss />
      </div>
      <div>
        <PostList />
      </div>
    </div>
  );
}
