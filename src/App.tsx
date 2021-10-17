import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from '../src/styles/global';

import { Routes } from '../src/routes';

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Routes />
      </Router>
      <GlobalStyle />
    </>
  );
}

export default App;
