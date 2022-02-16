import { Grid, Box } from '@mui/material';
import React from 'react';
import Button from '../../components/button';
import Input from '../../components/input';

const SignUp: React.FC = () => {
  return (
    <Grid
      container
      direction='column'
      justifyContent='center'
      alignItems='center'
      style={{ height: '100vh', backgroundColor: '#dbdbdb' }}
    >
      <Box
        sx={{
          p: 20,
          boxShadow: 3,
          borderRadius: 3,
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundColor: '#ffffff',
        }}
      >
        <h1>Cadastro boladaço</h1>
        <Input
          sx={{ width: '100%', marginBottom: 2 }}
          label='E-mail'
          variant='outlined'
        />
        <Input
          sx={{ width: '100%', marginBottom: 2 }}
          label='Senha'
          variant='outlined'
        />
        <Button
          sx={{ width: '100%', marginBottom: 2 }}
          text='Clique aqui'
          color='primary'
        />
      </Box>
    </Grid>
  );
};

export default SignUp;
