import React from 'react';

import GlobalStyle from '../src/styles/global';

import { Home } from '../src/pages/Home';

const App: React.FC = () => {
  return (
    <>
      <Home />
      <GlobalStyle />
    </>
  );
}

export default App;
