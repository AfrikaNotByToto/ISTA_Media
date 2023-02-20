import React, { useLayoutEffect } from 'react';
import { useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../store';
import { initNews } from './NewsSlice';
import NewsCard from './NewsCard';

function NewsPage(): JSX.Element {
  // const { postId } = useParams();
  const state = useSelector((store: RootState) => store.news.news);
  const dispatch = useAppDispatch();
  useLayoutEffect((): void => {
    dispatch(initNews());
  }, [dispatch]);
  return (
    <div>
      {state ? (
        <div>
          <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
            {state.map((oneNews) => (
              <NewsCard key={oneNews.id} oneNews={oneNews} />
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

export default NewsPage;
