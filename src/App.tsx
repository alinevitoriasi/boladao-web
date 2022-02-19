import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Box, createTheme, ThemeProvider } from '@mui/material';

import AppBar from './components/AppBar';

import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import NewPosts from './pages/NewPosts';
import Posts from './pages/Posts';

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
        <Box sx={{ backgroundColor: '#f6f6f6', height: '100vh' }}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/sobre' element={<About />} />
            <Route path='/contato' element={<Contact />} />
            <Route path='/novopost' element={<NewPosts />} />
            <Route path='/posts' element={<Posts />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
          </Routes>
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
