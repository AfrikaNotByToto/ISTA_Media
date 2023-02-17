/* eslint-disable max-len */
import React from 'react';

import Requests from './Requests';
import Request from '../Requests/Request';

export default function MainPage(): JSX.Element {
  return (
    <>
      <div style={{ marginTop: '150px', marginLeft: '50px' }}>
        <h1
          className="h11"
          style={{ color: 'whitesmoke', fontSize: '50px', fontWeight: 'bolder' }}
        >
          Сделаем ваш бизнес узнаваемым
        </h1>
        <h5 className="h55" style={{ color: 'whitesmoke', fontSize: '30px' }}>
          сотрудничаем с застройщиками,риэлторскими агенствами и отелями
        </h5>
      </div>
      <div className="flex justify-end">
        <img
          src="https://images.squarespace-cdn.com/content/v1/5d0ade01fc40e30001b4a6c5/1611179474887-THCHA3NFBUUQD9DGLOSV/bw+spiral+gif.gif"
          alt=""
          style={{ height: '100%' }}
        />
      </div>
      <div
        className="flex"
        style={{
          marginTop: '65px',
          marginLeft: '50px',
          height: '55px',
          width: 'auto',
        }}
      />
      <div>
        <div>
          {' '}
          <Request />
          <div>
            <Requests />
          </div>
        </div>
      </div>
    </>
  );
}
