import React from 'react';
import Pages from '../pages/pages';
import ListUsers from '../components/listUsers';
import LoginComponent from '../components/loginComponent';

export default function App() {
  return (
    <div>
      <ListUsers />
      <LoginComponent />
    </div>
  );
}
