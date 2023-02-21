import React, { useState } from 'react';

import { useAppDispatch } from '../../store';
import { Description } from '../AboutUs/Types/type';
import { updateDescriptions } from '../AboutUs/descriptionSlicer';

export default function UpdatedDescription({
  open,
  description,
}: {
  description: Description;
  open: () => void;
}): JSX.Element {
  const [img, setImg] = useState(description.img);
  const [body, setBody] = useState(description.body);

  const dispatch = useAppDispatch();
  const updatedDescriptionOne = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(updateDescriptions({ id: description.id, img, body }));
    open();
  };
  const addImg = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setImg(e.target.value);
  };

  return (

    <div
      className="block max-w-sm rounded-lg bg-white p-20 shadow-lg dark:bg-neutral-700"
    >
      <form onSubmit={updatedDescriptionOne}>
        <center>
          <div className="relative mb-12" data-te-input-wrapper-init>
            <input
              style={{ backgroundColor: 'white', color: 'black' }}
              type="text"
              id="img"
              placeholder="Вставьте ссылку на картинку"
              name="img"
              defaultValue={img}
              onChange={addImg}
            />

          </div>
          <div className="relative mb-12" data-te-input-wrapper-init>
            <input
              style={{ backgroundColor: 'white', color: 'black' }}
              type="text"
              id="description"
              placeholder="Описание"
              name="description"
              defaultValue={body}
              onChange={(e) => setBody(e.target.value)}
            />

          </div>
          <div className="flex justify-evenly">
            <button
              className="shadow-2xl py-2 px-7 bg-blue-700 text-white rounded hover:bg-blue-800"
              type="submit"
            >
              Изменить
            </button>
          </div>
        </center>
      </form>
    </div>

  );
}
