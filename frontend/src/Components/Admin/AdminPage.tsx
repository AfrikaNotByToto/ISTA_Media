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
    <>
      {/* <div style={{ margin: '1rem' }} className="flex justify-between">
        <div style={{ backgroundColor: 'white', border: 'black 1px solid', marginTop: '1rem' }} className="block  w-1/4 rounded-lg bg-white p-20 shadow-lg dark:bg-neutral-700">{'userName' in user && <AddPostss />}</div>
        <div style={{ backgroundColor: 'white', border: 'black 1px solid', marginTop: '1rem' }} className="block  w-1/4 rounded-lg bg-white p-20 shadow-lg dark:bg-neutral-700">{'userName' in user && <AddDescription />}</div>
        <div style={{ backgroundColor: 'white', border: 'black 1px solid', marginTop: '1rem' }} className="block  w-1/4 rounded-lg bg-white p-20 shadow-lg dark:bg-neutral-700">{'userName' in user && <AddNews />}</div>
      </div>
      <div className="col">
        <div>{'userName' in user && <PostList />}</div>
        <div>{'userName' in user && <DescriptionCardList />}</div>
        <div>{'userName' in user && <NewsList />}</div>
      </div> */}
      <center>
        <div className="container" style={{ backgroundColor: 'white', border: 'black 1px solid', marginTop: '1rem', marginBottom: '1rem', marginLeft: '1rem', marginRight: '1rem' }}>
          {'userName' in user && <AddPostss />}
          <div className="columns-3">
            {'userName' in user && <PostList />}
          </div>
        </div>

        <div className="container" style={{ backgroundColor: 'white', border: 'black 1px solid', marginTop: '1rem', marginBottom: '1rem', marginLeft: '1rem', marginRight: '1rem' }}>
          {'userName' in user && <AddDescription />}
          <div className="columns-3">
            {'userName' in user && <DescriptionCardList />}
          </div>
        </div>
      </center>

    </>
  );
}
