import React from 'react';
import Modal from '../Modal/Modal';

export default function MainPage(): JSX.Element {
  return (
    <>
      <img
        style={{ position: 'absolute', height: '700px', right: '0' }}
        src="/img/4.png"
        alt=""
      />
      <div
        className="container text-center sm:text-left"
        style={{ position: 'relative' }}
      >
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <h1
            className="clients md:text-3xl mt-20  "
            style={{
              position: 'absolute',
              top: '8rem',
              left: '7%',
              color: 'black',
              fontWeight: 'bolder',
            }}
          >
            Ваши клиенты вас найдут
          </h1>
          <h5
            className="md:text-base mt-20 "
            style={{
              position: 'absolute',
              top: '17rem',
              left: '7%',
              color: 'black',
            }}
          >
            сотрудничаем с застройщиками,
          </h5>
          <h5
            className="md:text-base mt-20 absolute"
            style={{
              top: '20rem',
              left: '7%',
              color: 'black',
              fontSize: '30px',
            }}
          >
            риэлторскими агенствами и отелями
          </h5>
        </div>
        <Modal />
      </div>
    </>
  );
}
