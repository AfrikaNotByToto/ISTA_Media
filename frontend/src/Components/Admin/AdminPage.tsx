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

      <center>
        <div className="container" style={{ backgroundColor: 'white', border: 'black 1px solid', marginTop: '1rem', marginBottom: '3rem', marginLeft: '1rem', marginRight: '1rem' }}>
          {'userName' in user && <AddPostss />}
          <div>
            {'userName' in user && <PostList />}
          </div>
        </div>
      </center>

      <center>
        <div className="container" style={{ backgroundColor: 'white', border: 'black 1px solid', marginTop: '1rem', marginBottom: '3rem', marginLeft: '1rem', marginRight: '1rem' }}>
          {'userName' in user && <AddDescription />}

          <div>
            {'userName' in user && <DescriptionCardList />}
          </div>
        </div>
      </center>

      <center>
        <div className="container" style={{ backgroundColor: 'white', border: 'black 1px solid', marginTop: '1rem', marginBottom: '3rem', marginLeft: '1rem', marginRight: '1rem' }}>
          {'userName' in user && <AddNews />}
          <br />
          <br />
          <div>
            {'userName' in user && <NewsList />}
          </div>
        </div>
      </center>

    </>
  );
}
