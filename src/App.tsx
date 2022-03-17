import React from 'react';
import {
  Route,
  Routes,
  Navigate,
  BrowserRouter,
  Outlet,
} from 'react-router-dom';
import { Box, createTheme, ThemeProvider } from '@mui/material';

import AppBar from './components/AppBar';

import About from './pages/About';
// import Contact from './pages/Contact';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import NewPosts from './pages/NewPosts';
import Posts from './pages/Posts';
import { isAuthenticated } from './services/auth';
import NotFound from './pages/NotFound';

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

const App = () => {
  const appTheme = createTheme({
    spacing: 4,
    components: {
      MuiTypography: {
        defaultProps: {
          color: '#110E2E',
        },
      },
    },
    status: {
      danger: '#0B1D51',
    },
    palette: {
      primary: {
        main: '#6A49D8',
      },
      secondary: {
        main: '#1c1464',
      },
    },
    typography: {
      fontFamily: ['Montserrat'].join(','),
    },
  });

  const PrivateRoute = (): JSX.Element => {
    return <>{isAuthenticated() ? <Outlet /> : <Navigate to='/home' />}</>;
  };

  return (
    <BrowserRouter>
      <ThemeProvider theme={appTheme}>
        <AppBar />
        <Box sx={{ backgroundColor: '#FFFFFF', height: '90vh' }}>
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/cadastrar' element={<SignUp />} />
            <Route path='/posts' element={<Posts />} />
            <Route path='/novopost' element={<NewPosts />} />
            {/* <Route path='/contato/:id' element={<Contact />} /> */}
            <Route path='/' element={<PrivateRoute />}>
              <Route path='/sobre' element={<About />} />
            </Route>
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
