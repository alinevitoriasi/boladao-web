import React, { useState } from 'react';
import { Box, CircularProgress, Grid, Typography } from '@mui/material';

import Card from '../../components/Card';
import api from '../../services/api';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { useSnackbar } from 'notistack';
import SelectComponent from '../../components/Select';
import { useForm } from 'react-hook-form';
import Input from '../../components/Input';

const AdminPage = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const [params, setParams] = useState({});
  const { isLoading, isError, error, data } = useQuery(
    ['posts', JSON.stringify(params)],
    () =>
      api
        .get('admin/posts', { params: params, withCredentials: true })
        .then((res) => res.data)
  );

  if (isError) {
    const errorData = error as any;
    const message = errorData?.response?.data?.message;
    enqueueSnackbar(message, { variant: 'error' });
  }

  const { control, handleSubmit } = useForm<any>();

  const onSubmit = async (data: any) => {
    setParams({
      ...(data?.type && { type: data?.type ? data?.type?.join(',') : '' }),
      ...(data?.text && { text: data?.text }),
    });
    console.log('onSubmit', params, data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          sx={{
            height: 100,
            marginLeft: 10,
            marginRight: 10,
            paddingTop: 5,
            display: 'flex',
          }}
        >
          <Input
            // error={!!errors.email}
            // helperText={errors.email?.message || ' '}
            control={control}
            name='text'
            label='Filtrar por'
            variant='outlined'
            sx={{
              width: '70%',
              margin: 4,
              height: 100,
            }}
          />
          <SelectComponent
            label='Tipo'
            name='type'
            options={[
              'Racismo',
              'Machismo',
              'LGBTfobia',
              'Xenofobia',
              'Gordofobia',
              'Capicitismo',
              'Etarismo',
              'Intolerância Religiosa',
              'Outros',
            ]}
            sx={{
              minWidth: 500,
              margin: 4,
              height: 100,
            }}
            control={control}
          />
          <Button
            sx={{
              width: '70%',
              margin: 4,
              height: 50,
            }}
            color='secondary'
            size='large'
            text='Buscar'
            type='submit'
          />
        </Box>
        <Typography
          sx={{
            marginLeft: 15,
            marginRight: 10,
            display: 'flex',
          }}
          variant='body1'
        >
          Total encontrado: {data?.total}
        </Typography>
      </form>
      <Box
        sx={{
          margin: 10,
        }}
      >
        {isLoading && (
          <Grid
            container
            direction='column'
            justifyContent='center'
            alignItems='center'
            sx={{ paddingTop: '45vh', margin: 10 }}
          >
            <Grid item>
              <CircularProgress color='inherit' />
            </Grid>
          </Grid>
        )}
        {!isLoading && data?.length < 1 ? (
          <Grid
            container
            direction='column'
            justifyContent='center'
            alignItems='center'
            sx={{ paddingTop: '25vh' }}
          >
            <Grid item>
              <Typography variant='h4'>Ainda não temos posts.</Typography>
              <Typography variant='body1' sx={{ padding: '40px' }}>
                Seja o primeiro a fazer uma postagem
              </Typography>
              <Button
                text='Criar um post'
                onClick={() => {
                  navigate('/novopost');
                }}
              />
            </Grid>
          </Grid>
        ) : (
          <Grid container justifyContent='center' alignItems='center'>
            {data &&
              data?.posts?.map((post: IPost) => {
                return (
                  <Grid item key={post._id} md={6} sm={12}>
                    <Card
                      handleClick={() => navigate(`/admin/post/${post?._id}`)}
                      noAction
                      text={post.text}
                      author={post?.author?.username}
                      tags={post?.type}
                      height={350}
                    />
                  </Grid>
                );
              })}
          </Grid>
        )}
      </Box>
    </>
  );
};

export default AdminPage;
