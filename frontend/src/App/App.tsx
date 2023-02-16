import React from 'react';

import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from '../Components/NavBar/NavBar';
import MainPage from '../Components/Main/MainPage';

function App(): JSX.Element {
  return (
    <div>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<MainPage />} />
          {/* <Route path="/cases" element={<CasesPage />} /> */}
          {/* <Route path="/news" element={<NewsPage />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
