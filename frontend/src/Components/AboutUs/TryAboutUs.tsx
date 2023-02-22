import React from 'react';
import DescriptionCard from './DescriptionCard';
import { Description } from './Types/type';

export default function TryAboutUs({ state }: { state: Description[] }): JSX.Element {
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
        <DescriptionCard key={description.id} description={description} />
      ))}
    </div>
  );
}
