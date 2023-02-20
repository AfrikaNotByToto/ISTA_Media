/* eslint-disable max-len */
import React from 'react';
import Modal from '../Modal/Modal';

// import Requests from './Requests';
// import Request from '../Requests/Request';

export default function MainPage(): JSX.Element {
  return (
    <>
      <div className="container" style={{ position: 'relative' }}>
        <img
          // className="bg-contain bg-center"
          src="/img/4.png"
          alt=""
          style={{
            height: '60%',
            width: '60%',
            marginLeft: '65%',
            marginTop: '3%',
          }}
        />
        <h1
          className="h11"
          style={{
            position: 'absolute',
            top: '20%',
            left: '7%',
            color: 'black',
            fontSize: '60px',
            fontWeight: 'bolder',
          }}
        >
          Ваши клиенты вас найдут
        </h1>
        <h5
          style={{
            position: 'absolute',
            top: '40%',
            left: '7%',
            color: 'black',
            fontSize: '30px',
          }}
        >
          сотрудничаем с застройщиками,
        </h5>
        <h5
          style={{
            position: 'absolute',
            top: '45%',
            left: '7%',
            color: 'black',
            fontSize: '30px',
          }}
        >
          риэлторскими агенствами и отелями
        </h5>
      </div>
      <div style={{ marginTop: '-400px', marginLeft: '100px' }}>
        <Modal />
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
      {/* <div>
        <div>
          {' '}
          <Request /> */}
      {/* <div>
            <Requests />
          </div> */}
      {/* </div>
      </div> */}
    </>
  );
}
