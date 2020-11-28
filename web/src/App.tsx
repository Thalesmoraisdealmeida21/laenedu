import React from 'react';
import Home from './pages/Home';
import GlobalStyle from './styles/global';
import { BrowserRouter} from 'react-router-dom';
import Routes from './routes/';
const App: React.FC = () => {
  return (
    <>
    <BrowserRouter>
    <Routes></Routes>
    </BrowserRouter>
     
      <GlobalStyle />
    </>
  );
};

export default App;
