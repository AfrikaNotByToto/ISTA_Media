import React, { useState } from 'react';
import * as api from '../../App/api';

function Modal(): JSX.Element {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [error, setError] = useState(false);

  function toggleModal(): void {
    document.getElementById('modal')?.classList.toggle('hidden');
  }

//   document.addEventListener('keyup', (event) => {
//     event.preventDefault();
//     console.log(event);
//  if (event.code === 'Enter') {
//       api.sendEmailList({ name, mail });
//       setName('');
//       setMail('');
//       document.getElementById('modal')?.classList.toggle('hidden');
//   }
// });

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    if (name && mail) {
      api.sendEmailList({ name, mail });
      setName('');
      setMail('');
      document.getElementById('modal')?.classList.toggle('hidden');
    } else {
      setError(true);
    }
  };
  return (
    <>
      <div className="flex items-center justify-center h-full">
        <button
          type="button"
          className="shadow-2xl py-2 px-7 bg-blue-700 text-white rounded hover:bg-blue-800"
          onClick={toggleModal}
        >
          Чек-лист
        </button>
      </div>
      <div className="fixed z-10 overflow-y-auto top-0 w-full left-0 hidden" id="modal">
        <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-gray-900 opacity-75" />
          </div>
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
            &#8203;
          </span>
          <div
            className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <p style={{ marginTop: '5%', marginLeft: '5%' }}>
              Получите чек-лист для создания собственного бренда уже сейчас
            </p>
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <label>Ваше имя</label>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                className="w-full bg-gray-100 p-2 mt-2 mb-3"
              />
              <label>E-mail</label>
              <input
                onChange={(e) => setMail(e.target.value)}
                value={mail}
                type="text"
                className="w-full bg-gray-100 p-2 mt-2 mb-3"
              />
              {error && <span className="text-red-600">Заполните все поля</span>}
            </div>
            <div className="bg-gray-200 px-4 py-3 text-right">
              <button
                type="button"
                className="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-800 mr-2"
                onClick={toggleModal}
              >
                <i className="fas fa-times" /> Закрыть
              </button>
              <button
                onClick={handleClick}
                type="button"
                className="py-2 px-4 bg-blue-700 text-white rounded hover:bg-blue-800 mr-2 handleenter"
              >
                <i className="fas fa-plus" /> Получить
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
