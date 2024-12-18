import React from 'react';
import { CircularProgress, Grid, Typography } from '@mui/material';

import api from '../../services/api';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { useSnackbar } from 'notistack';
import CardLink from '../../components/Card/CardLink';

const Posts = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const { isLoading, isError, error, data } = useQuery('posts', () =>
    api.get('/posts', { withCredentials: true }).then((res) => res.data)
  );

  if (isError) {
    const errorData = error as any;
    const message = errorData?.response?.data?.message;
    enqueueSnackbar(message, { variant: 'error' });
  }

  return (
    <>
      {isLoading && (
        <Grid
          container
          direction='column'
          justifyContent='center'
          alignItems='center'
          sx={{ paddingTop: '45vh' }}
        >
          <Grid item>
            <CircularProgress color='inherit' />
          </Grid>
        </Grid>
      )}
      {!isLoading && data?.posts?.length < 1 ? (
        <Grid
          container
          direction='column'
          justifyContent='center'
          alignItems='center'
          sx={{ paddingTop: '25vh' }}
        >
          <Grid item>
            <Typography variant='h4'>Ainda não temos publicações.</Typography>
            <Typography variant='body1' sx={{ padding: '40px' }}>
              Seja o primeiro a fazer uma publicação.
            </Typography>
            <Button
              text='Criar publicação'
              onClick={() => {
                navigate('/novopost');
              }}
            />
          </Grid>
        </Grid>
      ) : (
        <Grid container justifyContent='center' alignItems='center'>
          {data?.posts?.map((post: IPost) => {
            return (
              <Grid item key={post._id} md={8} sm={12}>
                <CardLink
                  to={`/post/${post?._id}`}
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
    </>
  );
};

export default Posts;
