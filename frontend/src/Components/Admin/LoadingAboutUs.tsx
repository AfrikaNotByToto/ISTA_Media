import React from 'react';
import DescriptionSolo from './SoloDescription';
import { Description } from '../AboutUs/Types/type';

export default function LoadingAboutUs({ state }: { state: Description[] }): JSX.Element {
  return (
    <div
      style={{
        display: 'grid',
        flexFlow: 'row wrap',
        gridTemplateColumns: 'repeat(3, 1fr)',
        margin: '2rem 1rem 1rem 14rem',
      }}
    >
      {state.map((description) => (
        <DescriptionSolo key={description.id} description={description} />
      ))}
    </div>
  );
}
