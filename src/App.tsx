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

import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import NewPosts from './pages/NewPosts';
import Posts from './pages/Posts';
import { isAuthenticated } from './services/auth';
import NotFound from './pages/NotFound';
import { SnackbarProvider } from 'notistack';
import { QueryClient, QueryClientProvider } from 'react-query';

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
    return <>{isAuthenticated() ? <Outlet /> : <Navigate to='/' />}</>;
  };

  const queryClient = new QueryClient();
  return (
    <BrowserRouter>
      <ThemeProvider theme={appTheme}>
        <QueryClientProvider client={queryClient}>
          <SnackbarProvider maxSnack={3}>
            <AppBar />
            <Box sx={{ backgroundColor: '#FFFFFF', height: '90vh' }}>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/cadastrar' element={<SignUp />} />
                {/* <Route path='/contato/:id' element={<Contact />} /> */}
                <Route element={<PrivateRoute />}>
                  <Route path='/posts' element={<Posts />} />
                  <Route path='/novopost' element={<NewPosts />} />
                </Route>
                <Route path='*' element={<NotFound />} />
              </Routes>
            </Box>
          </SnackbarProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
