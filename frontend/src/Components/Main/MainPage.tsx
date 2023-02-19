/* eslint-disable max-len */
import React from 'react';

import Requests from './Requests';
import Request from '../Requests/Request';

export default function MainPage(): JSX.Element {
  return (
    <>
      <div className="container" style={{ position: 'relative' }}>
        <img
          className="bg-contain bg-center"
          src="https://99px.ru/sstorage/53/2013/04/tmb_68339_3636.jpg"
          alt=""
          style={{
            height: '100%',
            width: '100%',
          }}
        />
        <h1
          className="h11"
          style={{
            position: 'absolute',
            top: '15%',
            left: '5%',
            color: 'whitesmoke',
            fontSize: '60px',
            fontWeight: 'bolder',
          }}
        >
          Ваши клиенты вас найдут
        </h1>
        <h5
          style={{
            position: 'absolute',
            top: '30%',
            left: '5%',
            color: 'whitesmoke',
            fontSize: '30px',
          }}
        >
          сотрудничаем с застройщиками,
        </h5>
        <h5
          style={{
            position: 'absolute',
            top: '38%',
            left: '5%',
            color: 'whitesmoke',
            fontSize: '30px',
          }}
        >
          риэлторскими агенствами и отелями
        </h5>
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
