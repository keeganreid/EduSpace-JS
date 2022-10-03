import React from 'react';
import Login from './login';
import { Route, Routes } from 'react-router-dom';
import Home from './home';

function pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default pages;
