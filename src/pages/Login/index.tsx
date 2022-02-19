import React from 'react';

import { Box, Grid } from '@mui/material';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Card from '../../components/Card';

const Login = () => {
  return (
    <Grid
      container
      direction='column'
      justifyContent='center'
      alignItems='center'
      style={{ height: '100vh' }}
    >
      <Box
        sx={{
          p: 15,
          boxShadow: 3,
          borderRadius: 3,
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundColor: '#FFFFFF',
        }}
      >
        <h1 style={{ color: '#0B1D51', textAlign: 'center' }}>
          Login Boladaço
        </h1>
        <Input
          sx={{
            width: '100%',
            marginBottom: 2,
            borderRadius: 2,
          }}
          label='E-mail'
          variant='outlined'
        />
        <Input
          sx={{
            width: '100%',
            marginBottom: 2,
            borderRadius: 2,
          }}
          label='Senha'
          variant='outlined'
        />
        <Button color='secondary' size='large' text='Entrar' />
      </Box>
    </Grid>
  );
};

export default Login;
