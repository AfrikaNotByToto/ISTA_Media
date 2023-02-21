import React from 'react';
import { OneNews } from './Types/types';

function NewsCard({ oneNews }: { oneNews: OneNews }): JSX.Element {
  return (
    // <div className="carousel-item">
    // eslint-disable-next-line max-len
    //   <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    //     <img
    // eslint-disable-next-line max-len
    //       className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
    //       src={oneNews.img}
    //       alt="..."
    //     />
    //     <div className="flex flex-col justify-between p-4 leading-normal">
    //       <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    //         {oneNews.title}
    //       </h5>
    //       <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
    //         {oneNews.description}
    //       </p>
    //     </div>
    //   </div>
    // </div>

    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure><img src={oneNews.img} alt="Album" /></figure>
      <div className="card-body">
        <h2 className="card-title">{oneNews.title}</h2>
        <p>{oneNews.description}</p>
      </div>
    </div>
  );
}

export default NewsCard;
