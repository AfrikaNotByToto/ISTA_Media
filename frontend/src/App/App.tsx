import React from 'react';

import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from '../Components/NavBar/NavBar';

import PostPage from '../Components/Posts/PostPage';
import NewsPage from '../Components/News/NewsPage';
import MainPage from '../Components/Main/MainPage';
import AdminPage from '../Components/Admin/AdminPage';
import Registration from '../Components/auth/RegistrationForm';
import Authorization from '../Components/auth/AuthForm';
import AboutUs from '../Components/AboutUs/AboutUs';

function App(): JSX.Element {
  return (
    <div>
      <NavBar />
      {/* <Route path="/" element={<NavBar />}> */}

      <Routes>
        {/* <Route index element={<MainPage />} /> */}

        <Route path="/cases" element={<PostPage />} />
        <Route index element={<MainPage />} />
        <Route path="/adminPage" element={<AdminPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/admin" element={<Authorization />} />
        <Route path="registration" element={<Registration />} />

        <Route path="/about" element={<AboutUs />} />

        {/* </Route> */}
      </Routes>
    </div>

  );
}

export default App;
