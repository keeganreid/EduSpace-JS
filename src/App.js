import React from 'react';
import './style.css';
import Pages from '../pages/pages';
import { BrowserRouter } from 'react-router-dom';
import SideBar from '../components/sideBar';

export default function App() {
  return (
    <BrowserRouter>
      <SideBar />
      <Pages />
    </BrowserRouter>
  );
}
