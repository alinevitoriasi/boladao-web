import React from 'react';

import { useSnackbar } from 'notistack';
import { useParams } from 'react-router-dom';
import { useMutation, useQuery } from 'react-query';

import api from '../../services/api';
import Card from '../../components/Card';
import { Grid, Typography, Box } from '@mui/material';
import Button from '../../components/Button';
import TextBox from '../../components/TextBox';
import { useForm } from 'react-hook-form';
const Post = () => {
  const { control, handleSubmit, reset } = useForm<any>({});

  const { id } = useParams();

  const { enqueueSnackbar } = useSnackbar();

  const { isError, error, data, refetch } = useQuery(
    'postId',
    () => api.get(`/posts/${id}`).then((res) => res.data),
    { retry: 0 }
  );

  if (isError) {
    const errorData = error as any;
    const message = errorData?.response?.data?.message;
    enqueueSnackbar(message, { variant: 'error' });
  }

  const { mutate: mutateComment } = useMutation(
    (data: any) => {
      console.log('teste', data);
      // return null;
      return api.put('/add/' + id, {
        text: data?.text,
        username: 'aline',
        date: 'teste',
      });
    },
    {
      onSuccess: () => {
        refetch();
        reset();
        enqueueSnackbar('Comentário enviado com Sucesso!', {
          variant: 'success',
        });
      },
      onError: ({ response }: any) => {
        enqueueSnackbar(response?.data?.message || 'Error', {
          variant: 'error',
        });
      },
    }
  );

  const onSubmit = (data: any) => {
    mutateComment(data);
  };
  console.log(data?.comments?.length > 0);

  return (
    <Grid container sx={{ marginLeft: 5 }}>
      <Grid item md={7} sm={12}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Card
            noAction
            text={data?.text}
            author={data?.author?.username}
            sx={{ m: 0, marginBottom: 10, minHeight: 400 }}
          />
          <TextBox
            label=''
            variant='outlined'
            name='text'
            control={control}
            placeholder='Digite seu comentário'
            rows={5}
            sx={{ width: '100%', marginBottom: 10 }}
          />
          <Button
            sx={{ width: '100%' }}
            color='secondary'
            size='large'
            text='Enviar'
            type='submit'
          />
        </form>
      </Grid>
      <Grid item md={5} sm={12} sx={{ marginTop: '55px' }}>
        <Box style={{ maxHeight: '80vh', overflow: 'auto' }}>
          {data?.comments
            ?.map((comment: any, index: any): any => {
              return (
                <Card
                  height={200}
                  key={index}
                  noAction
                  text={comment?.text}
                  author={comment?.username}
                />
              );
            })
            .reverse()}
        </Box>
        {data?.comments?.length === 0 && (
          <Box
            style={{
              height: '100%',
              alignContent: 'center',
              justifyContent: 'center',
              display: 'grid',
            }}
          >
            <Typography variant='body1'>
              Essa publicação ainda não possui nenhum comentário.
            </Typography>
            <Typography variant='body1'>
              Seja o primeiro a deixar uma mensagem de apoio!
            </Typography>
          </Box>
        )}
      </Grid>
    </Grid>
  );
};

export default Post;
