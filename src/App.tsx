import React, { useState } from 'react';
import {
  Route,
  Routes,
  Navigate,
  BrowserRouter,
  Outlet,
} from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Box, createTheme, ThemeProvider } from '@mui/material';

import { isAuthenticated } from './services/auth';

import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import NewPosts from './pages/NewPosts';
import Posts from './pages/Posts';
import NotFound from './pages/NotFound';
import MyPosts from './pages/MyPosts';
import Post from './pages/Post';

import AppBar from './components/AppBar';

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
        main: '#1852C2',
      },
      secondary: {
        main: '#1852C2',
      },
    },
    typography: {
      fontFamily: ['Montserrat'].join(','),
    },
  });

  const [teste, setTeste] = useState<
    'fixed' | 'absolute' | 'sticky' | 'static' | 'relative'
  >('absolute');

  const PrivateRoute = (): JSX.Element => {
    setTeste('static');

    return (
      <>
        {/* <AppBar position='static' /> */}
        <Box
          sx={{
            backgroundColor: '#FFFFFF',
            height: '100vh',
          }}
        >
          {isAuthenticated() ? <Outlet /> : <Navigate to='/' />}
        </Box>
      </>
    );
  };

  const PublicRoute = (): JSX.Element => {
    setTeste('absolute');

    return (
      <>
        {/* <AppBar position='absolute' /> */}
        <Box
          sx={{
            backgroundColor: '#E1EBFF',
            boxShadow: 'inset -65vw 0 #FFFFFF',
            height: '100vh',
          }}
        >
          {!isAuthenticated() ? <Outlet /> : <Navigate to='/posts' />}{' '}
        </Box>
      </>
    );
  };

  console.log('isAuthenticated()', isAuthenticated());

  const queryClient = new QueryClient();
  return (
    <BrowserRouter>
      <ThemeProvider theme={appTheme}>
        <QueryClientProvider client={queryClient}>
          <SnackbarProvider maxSnack={3}>
            <AppBar position={teste} />
            <Routes>
              <Route element={<PublicRoute />}>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/cadastrar' element={<SignUp />} />
                {/* <Route path='*' element={<NotFound />} /> */}
              </Route>
              <Route element={<PrivateRoute />}>
                <Route path='/post/:id' element={<Post />} />;
                <Route path='/posts' element={<Posts />} />
                <Route path='/myposts' element={<MyPosts />} />
                <Route path='/novopost' element={<NewPosts />} />
                {/* <Route path='*' element={<NotFound />} /> */}
              </Route>
              <Route path='*' element={<NotFound />} />
            </Routes>
          </SnackbarProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
