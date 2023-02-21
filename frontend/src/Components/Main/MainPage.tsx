/* eslint-disable max-len */
import React from 'react';
import CallBackForm from '../CallBackFom/CallBackForm';
import Footer from '../Footer/Footer';
import Modal from '../Modal/Modal';

// import Requests from './Requests';
// import Request from '../Requests/Request';

export default function MainPage(): JSX.Element {
  return (
    <>
      <div
        className="container text-center sm:text-left"
        style={{ position: 'relative' }}
      >
        <img
          // className="flex"
          src="/img/4.png"
          alt=""
          style={{
            height: '50%',
            width: '50%',
            marginLeft: '50%',
            marginTop: '3%',
          }}
        />
        <h1
          className="clients md:text-3xl mt-20  "
          style={{
            position: 'absolute',
            top: '8rem',
            left: '7%',
            color: 'black',
            // fontSize: '3rem',
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
            // fontSize: '2rem',
          }}
        >
          сотрудничаем с застройщиками,
        </h5>
        <h5
          className="md:text-base mt-20 absolute"
          style={{
            // position: 'absolute',
            top: '20rem',
            left: '7%',
            color: 'black',
            fontSize: '30px',
          }}
        >
          риэлторскими агенствами и отелями
        </h5>
        <div style={{ marginTop: '-500px', marginLeft: '-1200px' }}>
          <Modal />
        </div>
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
      <CallBackForm />
      <Footer />
    </>
  );
}
