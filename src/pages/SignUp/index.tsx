import React, { useState } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

import api from '../../services/api';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { useForm } from 'react-hook-form';

import { login } from '../../services/auth';
import { schemaSignUp } from '../../schema/schema-sign-up';
import AppForm from '../../components/AppForm/AppForm';
import AppFooter from '../Footer';
import Typography from '../../components/Typography/Typography';

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

  const [isLoading, setLoading] = useState(false);
  const onSubmit = async (data: ISignUp) => {
    try {
      setLoading(true);
      await api.post('/users', data);
      const response = await api.post('/login', {
        email: data?.email,
        password: data?.password,
      });
      setLoading(false);
      login(response?.data?.token, data?.username);
      navigate('/posts');
      enqueueSnackbar('Cadastrado com sucesso!', { variant: 'success' });
    } catch (error: any) {
      setLoading(false);
      if (error?.response) {
        enqueueSnackbar(error.response.data?.message, { variant: 'error' });
      } else {
        enqueueSnackbar('Erro ao cadastrar!', { variant: 'error' });
      }
    }
  };

  return (
    <>
      <AppForm>
        <Typography
          variant='h4'
          fontWeight={800}
          gutterBottom
          marked='center'
          align='center'
        >
          Cadastrar
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* <Typography variant='body1'>
            *Atenção não utilizar o seu nome verdadeiro.
          </Typography> */}
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
              marginBottom: 1,
              borderRadius: 2,
            }}
          />
          <Typography variant='caption' paragraph>
            Ao cadastrar, você concorda com os{' '}
            <a href='/terms'>termos e condições</a>
          </Typography>
          <Button
            type='submit'
            color='secondary'
            size='large'
            text='Cadastrar'
            loading={isLoading}
          />
        </form>
      </AppForm>
      <AppFooter />
    </>
  );
};

export default SignUp;
