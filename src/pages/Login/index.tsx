import React from 'react';

import { Box, Grid, Typography } from '@mui/material';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import api from '../../services/api';
import { login } from '../../services/auth';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

interface ILoginForm {
  email: string;
  password: string;
}

const schema = yup
  .object({
    email: yup.string().email('E-mail inválido').required('Campo Obrigatório'),
    password: yup.string().required('Campo Obrigatório'),
  })
  .required();

const Login = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>({ resolver: yupResolver(schema) });

  const onSubmit = async (data: ILoginForm) => {
    try {
      const response = await api.post('/login', data);
      login(response?.data?.token);
      navigate('/posts');
    } catch (error: any) {
      if (error?.response) {
        enqueueSnackbar(error.response.data?.message, { variant: 'error' });
      } else {
        enqueueSnackbar('Erro!', { variant: 'error' });
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
          Login Boladaço
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
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
            type='password'
            variant='outlined'
            sx={{
              width: '100%',
              marginBottom: 2,
              borderRadius: 2,
            }}
          />
          <Button color='secondary' size='large' text='Entrar' type='submit' />
        </form>
      </Box>
    </Grid>
  );
};

export default Login;
