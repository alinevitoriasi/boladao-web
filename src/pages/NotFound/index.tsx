import { Box, Grid, Typography } from '@mui/material';
import React from 'react';

import image from '../../assets/image-sad.png';

const NotFound = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#E1EBFF',
        boxShadow: 'inset -65vw 0 #FFFFFF',
        height: '100vh',
      }}
    >
      <Grid
        container
        sx={{
          height: 'inherit',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Grid item md={6} sm={12}>
          <img className='home-image' src={image} alt='Imagem' />
        </Grid>
        <Grid item md={6} sm={12}>
          <Box
            sx={{
              marginTop: 5,
              p: 20,
            }}
          >
            <Typography variant='h1' className='title' sx={{ fontWeight: 800 }}>
              Erro 404
            </Typography>
            <Typography variant='h2' className='title' sx={{ fontWeight: 800 }}>
              Essa página não existe.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default NotFound;
