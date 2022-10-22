import React from 'react';

import { useSnackbar } from 'notistack';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

import api from '../../services/api';
import Card from '../../components/Card';
import { Grid } from '@mui/material';
import Button from '../../components/Button';
import TextBox from '../../components/TextBox';
import { useForm } from 'react-hook-form';
const Post = () => {
  // const idPost = '6306be5597bff51012d64f9b';
  const { control } = useForm<any>();

  const { id } = useParams();

  // console.log(id);

  const { enqueueSnackbar } = useSnackbar();

  const { isError, error, data } = useQuery(
    'postId',
    () => api.get(`/posts/${id}`).then((res) => res.data),
    { retry: 0 }
  );

  if (isError) {
    const errorMessage = error as any;
    enqueueSnackbar(errorMessage?.message, { variant: 'error' });
  }

  // console.log(data);
  return (
    <Grid container>
      <Grid item md={8}>
        <Card noAction text={data?.text} author={data?.author?.username} />;
        <form onSubmit={() => {}}>
          <TextBox
            label=''
            variant='outlined'
            name='text'
            control={control}
            placeholder='Digite seu texto aqui'
            rows={5}
            fullWidth={true}
            sx={{
              borderRadius: 1,
              m: 3,
              width: '100%',
            }}
          />
          <Button
            sx={{
              m: 3,
              width: '100%',
            }}
            color='secondary'
            size='large'
            text='Enviar'
            type='submit'
          />
        </form>
      </Grid>
    </Grid>
  );
};

export default Post;
