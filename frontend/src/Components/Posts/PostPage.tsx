import React from 'react';
import { Root } from 'react-dom/client';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Store } from 'redux';
import { RootState } from '../../store';

function PostPage(): JSX.Element {
  const { postId } = useParams();
  const {state} = useSelector((store:RootState)=> store.)
  return <div>PostPage</div>;
}

export default PostPage;
