import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
// import productCurvyLines from '../../assets/productCurvyLines.png';
import { Paper } from '@mui/material';

interface IAppForm {
  size?: number;
  children?: React.ReactNode;
}
const AppForm = ({ size, children }: IAppForm) => {
  // const url = `url(${productCurvyLines})`;
  return (
    <Box
      sx={{
        display: 'flex',
        backgroundColor: '#F0F8FF', // Gradiente suave do cinza claro para o cinza
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Container maxWidth='sm'>
        <Box sx={{ mt: size || 40, mb: size || 40 }}>
          <Paper
            sx={{
              borderRadius: 3,
              boxShadow: 'none',
              py: { xs: 4, md: 8 },
              px: { xs: 5, md: 6 },
            }}
          >
            {children}
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};
export default AppForm;
