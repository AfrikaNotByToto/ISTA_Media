import React from 'react';
import DescriptionSolo from './SoloDescription';
import { Description } from '../AboutUs/Types/type';

export default function LoadingAboutUs({ state }: { state: Description[] }): JSX.Element {
  return (
    <>
      {state.map((description) => (
        <DescriptionSolo key={description.id} description={description} />
      ))}
    </>
  );
}
