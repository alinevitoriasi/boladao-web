import React, { useState } from 'react';

import { Grid, Box } from '@mui/material';
import Button from '../../components/Button';
import Input from '../../components/Input';

interface IFormFields {
  email: string;
  senha: string;
}

const SignUp = () => {
  const [campos, setCampos] = useState<IFormFields>({
    email: '',
    senha: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const name = e.target.name as keyof IFormFields;
    setCampos({ ...campos, [name]: e.target.value });
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(campos);
  };

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
          Cadastro Boladaço
        </h1>
        <form onSubmit={handleFormSubmit}>
          <Input
            sx={{
              width: '100%',
              marginBottom: 2,
              borderRadius: 2,
            }}
            label='E-mail'
            variant='outlined'
            name='email'
            onChange={handleInputChange}
          />
          <Input
            sx={{
              width: '100%',
              marginBottom: 2,
              borderRadius: 2,
            }}
            name='senha'
            label='Senha'
            variant='outlined'
            onChange={handleInputChange}
          />
          <Button
            type='submit'
            color='secondary'
            size='large'
            text='Cadastrar'
          />
        </form>
      </Box>
    </Grid>
  );
};

export default SignUp;
