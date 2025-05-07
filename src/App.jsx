import React from 'react';
import './App.css';
import MainPage from './shoppingfolder/MainPage';
import { HashRouter } from "react-router-dom";

const App = () => {
  return (
    <HashRouter>
      <div>
        <MainPage />
      </div>
    </HashRouter>
  );
};

export default App;