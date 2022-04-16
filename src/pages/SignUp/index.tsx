import React from 'react';

import { Grid, Box, Typography } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

import api from '../../services/api';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { useForm } from 'react-hook-form';

import { login } from '../../services/auth';
import { schemaSignUp } from '../../schema/schema-sign-up';

const SignUp = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignUp>({
    resolver: yupResolver(schemaSignUp),
  });

  const onSubmit = async (data: ISignUp) => {
    try {
      await api.post('/users', data);
      const response = await api.post('/login', {
        email: data?.email,
        password: data?.password,
      });
      login(response?.data?.token);
      navigate('/posts');
      enqueueSnackbar('Cadastrado com sucesso!', { variant: 'success' });
    } catch (error: any) {
      if (error?.response) {
        enqueueSnackbar(error.response.data?.message, { variant: 'error' });
      } else {
        enqueueSnackbar('Erro ao cadastrar!', { variant: 'error' });
      }
    }
  };

  console.log(errors.email);

  return (
    <Grid
      container
      direction='column'
      justifyContent='center'
      alignItems='center'
      style={{ height: 'inherit' }}
    >
      <Box
        sx={{
          p: 15,
          boxShadow: 3,
          borderRadius: 3,
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundColor: '#FFFFFF',
          minWidth: '40%',
        }}
      >
        <Typography
          variant='h4'
          className='title'
          sx={{ fontWeight: 800, paddingBottom: 5 }}
        >
          Cadastro Boladaço
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            error={!!errors.username}
            helperText={errors.username?.message || ' '}
            control={control}
            name='username'
            label='Nome'
            variant='outlined'
            sx={{
              width: '100%',
              marginBottom: 2,
              borderRadius: 2,
            }}
          />
          <Input
            error={!!errors.email}
            helperText={errors.email?.message || ' '}
            control={control}
            name='email'
            label='E-mail'
            variant='outlined'
            sx={{
              width: '100%',
              marginBottom: 2,
              borderRadius: 2,
            }}
          />
          <Input
            error={!!errors.password}
            helperText={errors.password?.message || ' '}
            control={control}
            name='password'
            label='Senha'
            variant='outlined'
            type='password'
            sx={{
              width: '100%',
              marginBottom: 2,
              borderRadius: 2,
            }}
          />
          <Input
            error={!!errors.comparePassword}
            helperText={errors.comparePassword?.message || ' '}
            control={control}
            name='comparePassword'
            label='Confirmar Senha'
            variant='outlined'
            type='password'
            sx={{
              width: '100%',
              marginBottom: 2,
              borderRadius: 2,
            }}
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
