import React, { useState } from 'react';
import OnlineForm from '../OnlineForm/OnlineForm';
import OnlineFormList from './OnlineFormList';

function Request(): JSX.Element {
  const [dataValue, setdataValue] = useState(() => new Date());
  return (
    <div className="container">
      <center>
        <OnlineForm dataValue={dataValue} setdataValue={setdataValue} />
        <br />
        <br />
        <OnlineFormList dataValue={dataValue} />
      </center>
    </div>
  );
}

export default Request;
