import React, { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { Calendar } from 'react-date-range';

function OnlineForm(): JSX.Element {
  const [click, setClick] = useState(() => new Date());

  const handleSelect = (date: Date): void => {
    // eslint-disable-next-line no-console
    console.log(date);
    setClick(date);
  };

  return (
    <div>
      <h2>React Date Range</h2>
      <Calendar date={click} onChange={handleSelect} />
    </div>
  );
}

export default OnlineForm;
