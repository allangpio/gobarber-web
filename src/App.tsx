import React from 'react';

import AppProvider from './hooks/index';
import GlobalStyle from './styles/global';
import SignIn from './pages/SignIn';

const App: React.FC = () => {
  return (
    <>
      <AppProvider>
        <SignIn />
      </AppProvider>

      <GlobalStyle />
    </>
  );
};

export default App;
