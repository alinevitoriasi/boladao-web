import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Box, createTheme, ThemeProvider } from '@mui/material';

import AppBar from './components/appBar';

import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

const App = () => {
  const appTheme = createTheme({
    spacing: 4,
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
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
