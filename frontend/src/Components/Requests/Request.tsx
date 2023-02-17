import React from 'react';
import OnlineForm from '../OnlineForm/OnlineForm';
import Inputes from './Inputes';
import OnlineFormList from './OnlineFormList';

function Request(): JSX.Element {
  return (
    <>
      <OnlineForm />
      <OnlineFormList />
      <Inputes />
    </>
  );
}

export default Request;
