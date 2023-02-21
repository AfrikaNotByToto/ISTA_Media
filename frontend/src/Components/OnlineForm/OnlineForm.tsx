import React from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { Calendar } from 'react-date-range';

function OnlineForm({
  dataValue,
  setdataValue,
}: {
  dataValue: Date;
  setdataValue: (e: Date) => void;
}): JSX.Element {
  const handleSelect = (date: Date): void => {
    // eslint-disable-next-line no-console
    console.log(date.toDateString());
    setdataValue(date);
  };

  return (
    <div>
      <h2>React Date Range</h2>
      <Calendar date={dataValue} onChange={handleSelect} />
    </div>
  );
}

export default OnlineForm;
