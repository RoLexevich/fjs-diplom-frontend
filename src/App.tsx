import React from 'react';
import Header from './common/header/Header';
import './App.scss';
import Menu from './common/menu/Menu';
import Users from './modules/users/Users';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="main-container">
        <Menu/>
        <Users/>
      </div>
    </div>
  );
}

export default App;
