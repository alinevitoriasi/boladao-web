import React, { useContext } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { useMutation } from 'react-query';

import Button from '../../components/Button';
import Input from '../../components/Input';

import api from '../../services/api';
import { login } from '../../services/auth';
import { schemaLogin } from '../../schema/schema-login';
import AuthContext from '../../services/auth/context/AuthContext';
import AppForm from '../../components/AppForm/AppForm';
import Typography from '../../components/Typography/Typography';
import AppFooter from '../Footer';

const Login = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { setUser } = useContext(AuthContext);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>({ resolver: yupResolver(schemaLogin) });

  const { mutate } = useMutation((data: ILogin) => api.post('/login', data), {
    onSuccess: ({ data }: any) => {
      setUser(data);
      login(data.token, data.username, data.isAdmin);
      data.isAdmin ? navigate('/admin') : navigate('/posts');
    },
    onError: ({ response }: any) => {
      enqueueSnackbar(response?.data?.message || 'Error', {
        variant: 'error',
      });
    },
  });

  return (
    <>
      <AppForm size={62}>
        <Typography variant='h4' gutterBottom marked='center' align='center'>
          Entrar
        </Typography>
        <form onSubmit={handleSubmit((data: ILogin) => mutate(data))}>
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
      </AppForm>
      <AppFooter />
    </>
  );
};

export default Login;
