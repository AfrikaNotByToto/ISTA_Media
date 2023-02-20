import React from 'react';
import { OneNews } from '../News/Types/types';
import NewsSolo from './SoloNew';

export default function LoadingNews({ state }: { state: OneNews[] }): JSX.Element {
  return (
    <div style={{ margin: '6rem 1rem 1rem 6rem' }} className="container">
      {state.map((oneNews) => (
        <NewsSolo key={oneNews.id} oneNews={oneNews} />
      ))}
    </div>
  );
}
