import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import Inputes from './Inputes';
import { initReqs } from './ReqSlice';

function OnlineFormList({ dataValue }: { dataValue: Date }): JSX.Element {
  const [form, stateForm] = useState('');

  const state = useSelector((store: RootState) => store.requests.requests);
  // eslint-disable-next-line no-console
  console.log('req', state);
  const dispatch = useAppDispatch();
  useEffect((): void => {
    dispatch(initReqs());
  }, [dispatch]);

  return (
    <>
      <div>
        <button
          className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium border border-blue-700 text-gray-900 bg-white rounded-lg hover:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          type="button"
          onClick={() => stateForm('12:00')}
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
      {form && <Inputes dataValue={dataValue} form={form} />}
    </>
  );
}

export default OnlineFormList;
