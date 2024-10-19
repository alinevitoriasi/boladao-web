import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import { QueryClient, QueryClientProvider } from 'react-query';
import { createTheme, ThemeProvider } from '@mui/material';

import AuthProvider from './services/auth/context/AuthProvider';
import AppRoutes from './AppRoutes';

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

  const queryClient = new QueryClient();

  return (
    <BrowserRouter>
      <ThemeProvider theme={appTheme}>
        <QueryClientProvider client={queryClient}>
          <SnackbarProvider maxSnack={3}>
            <AuthProvider>
              <AppRoutes />
            </AuthProvider>
          </SnackbarProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
