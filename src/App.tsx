import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';

import AppBar from './components/appBar';

import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';

const App = () => {
  const appTheme = createTheme({
    palette: {
      primary: {
        main: '#0B1D51',
      },
      secondary: {
        main: '#6A49D8',
      },
    },
  });

  return (
    <BrowserRouter>
      <ThemeProvider theme={appTheme}>
        <AppBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sobre' element={<About />} />
          <Route path='/contato' element={<Contact />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
