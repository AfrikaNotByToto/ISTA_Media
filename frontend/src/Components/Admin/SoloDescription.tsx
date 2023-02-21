import React, { useState } from 'react';
import { Description } from '../AboutUs/Types/type';
import { useAppDispatch } from '../../store';
import { deleteDescriptions } from '../AboutUs/descriptionSlicer';
import UpdatedDescription from './UpdateDescription';

// eslint-disable-next-line max-len
export default function DescriptionSolo({
  description,
}: {
  description: Description;
}): JSX.Element {
  const [modal, setModal] = useState(false);
  const open = (): void => {
    setModal((prev) => !prev);
  };
  const dispatch = useAppDispatch();
  const del = (): void => {
    dispatch(deleteDescriptions(description.id));
  };
  return (
    <>
      {modal && <UpdatedDescription open={open} description={description} />}
      <div
        style={{
          height: '370px',
          width: '300px',
          border: '1px white solid',
          marginBottom: '1rem',
        }}
        className="max-w-sm rounded overflow-hidden shadow-lg"
      >
        <center>
          <img
            style={{ width: '250px', height: '250px', marginTop: '1rem' }}
            className="w-full"
            src={description.img}
            alt="Sunset in the mountains"
          />

          <div className="px-6 py-4">
            <div style={{ color: 'gray' }} className="font-bold text-xl mb-2">
              {description.body}
            </div>
          </div>
        </center>
        <div className="flex-col">
          <button
            onClick={del}
            type="button"
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold rounded resize-y"
          >
            Delete
          </button>
          <button
            onClick={open}
            type="button"
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold rounded wd-40 h-5"
          >
            Update
          </button>
        </div>
      </div>
    </>
  );
}
