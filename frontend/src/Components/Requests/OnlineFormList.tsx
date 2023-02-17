import React, { useState } from 'react';
import Inputes from './Inputes';

function OnlineFormList({ dataValue }: { dataValue: Date }): JSX.Element {
  const [form, stateForm] = useState('');

  return (
    <>
      <div>
        <button
          className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium border border-blue-700 text-gray-900 bg-white rounded-lg hover:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          type="button"
          onClick={() => stateForm(`${dataValue}12:00`)}
        >
          12:00
        </button>
        <button
          className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium border border-blue-700 text-gray-900 bg-white rounded-lg hover:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          type="button"
        >
          13:00
        </button>
        <button
          className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium border border-blue-700 text-gray-900 bg-white rounded-lg hover:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          type="button"
        >
          14:00
        </button>
        <button
          className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium border border-blue-700 text-gray-900 bg-white rounded-lg hover:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          type="button"
        >
          15:00
        </button>
        <button
          className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium border border-blue-700 text-gray-900 bg-white rounded-lg hover:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          type="button"
        >
          16:00
        </button>
      </div>
      {form && <Inputes />}
    </>
  );
}

export default OnlineFormList;
