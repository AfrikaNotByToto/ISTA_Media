import React from 'react';
import { OneNews } from './Types/types';

function NewsCard({ oneNews }: { oneNews: OneNews }): JSX.Element {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <a href={oneNews.url}>
          <img src={oneNews.img} alt="Album" />
        </a>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{oneNews.title}</h2>
        <p>{oneNews.description}</p>
      </div>
    </div>
  );
}

export default NewsCard;
