import React from 'react';

import { Grid, Box, Typography } from '@mui/material';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface ISignUpForm {
  email: string;
  senha: string;
}

const schema = yup
  .object({
    email: yup.string().email('E-mail inválido').required('Campo Obrigatório'),
    senha: yup.string().required('Campo Obrigatório'),
  })
  .required();

const SignUp = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignUpForm>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: ISignUpForm) => {
    console.log('DATA', data);
  };
  console.log(errors.email);

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
            error={!!errors.email}
            helperText={errors.email?.message || ' '}
            control={control}
            name='senha'
            label='Senha'
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
