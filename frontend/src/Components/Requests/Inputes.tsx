import React, { useState } from 'react';
import * as api from '../../App/api/api';

function Inputes({ dataValue, form }: { dataValue: Date; form: string }): JSX.Element {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');

  const data = `${dataValue.getDate()}.${dataValue.getMonth()}.${dataValue.getFullYear()}-${form}`;

  const InputValues = { name, email, phone, data, comment };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    api.addReq(InputValues);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-6 mb-6 md:grid-cols-5">
        <div>
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium text-white dark:text-white"
          >
            Ваше имя
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Укажите имя"
            required
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block mb-2 text-sm font-medium text-white dark:text-white"
          >
            Номер телефона
          </label>
          <input
            onChange={(e) => setPhone(e.target.value)}
            type="tel"
            id="phone"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="+7(981)000-00-00"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-white dark:text-white"
          >
            Email
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Укажите ваш email"
            required
          />
        </div>
        <div>
          <label
            htmlFor="comment"
            className="block mb-2 text-sm font-medium text-white dark:text-white"
          >
            Комментарий
          </label>
          <input
            onChange={(e) => setComment(e.target.value)}
            type="text"
            id="comment"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Оставьте ваш комментарий"
            required
          />
        </div>
      </div>
      <button
        type="submit"
        className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Отправить
      </button>
    </form>
  );
}

export default Inputes;
