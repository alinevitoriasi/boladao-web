import React, { useEffect, useState } from 'react';
import { Grid, Typography } from '@mui/material';

import Card from '../../components/Card';
import api from '../../services/api';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';

interface Post {
  _id: string;
  text: string;
}
const Posts = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<Post[]>([]);

  async function getPosts() {
    const response = await api.get('/posts');
    setPosts(response.data);
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      {posts?.length < 1 ? (
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
        <Grid container>
          {posts?.map((post: Post) => {
            return (
              <Grid item key={post._id} md={6} sm={12}>
                <Card text={post.text} />
              </Grid>
            );
          })}
        </Grid>
      )}
    </>
  );
};

export default Posts;
