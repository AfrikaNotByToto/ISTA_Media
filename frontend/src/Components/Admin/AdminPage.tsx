import React from 'react';
import { useSelector } from 'react-redux';
import AddPostss from './AddPosts';
import PostList from './PostList';
import { RootState } from '../../store';
import DescriptionCardList from './DescriptionList';
import AddDescription from './AddDescription';
import NewsList from './NewsList';
import AddNews from './AddNews';

export default function AdminPage(): JSX.Element {
  const { user } = useSelector((store: RootState) => store.users);
  return (
    <div>
      <div>{'userName' in user && <AddPostss />}</div>
      <div>{'userName' in user && <PostList />}</div>
      <div>{'userName' in user && <AddDescription />}</div>
      <div>{'userName' in user && <DescriptionCardList />}</div>
      <div>{'userName' in user && <AddNews />}</div>
      <div>{'userName' in user && <NewsList />}</div>
    </div>
  );
}
