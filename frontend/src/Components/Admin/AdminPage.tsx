import React from 'react';
import { useSelector } from 'react-redux';
import AddPostss from './AddPosts';
import PostList from './PostList';
import { RootState } from '../../store';

export default function AdminPage(): JSX.Element {
  const { user } = useSelector((store: RootState) => store.users);
  return (
    <div>
      <div>
        <AddPostss />
      </div>
      <div>{'userName' in user && <PostList />}</div>
    </div>
  );
}
