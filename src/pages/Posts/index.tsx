import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';

import Card from '../../components/Card';
import api from '../../services/api';

interface Post {
  _id: string;
  text: string;
}
const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    api
      .get('/posts')
      .then((response) => setPosts(response.data))
      .catch((err) => {
        console.error('ops! ocorreu um erro' + err);
      });
  }, []);

  console.log(posts);

  return (
    <Grid container sx={{ paddingLeft: 15, paddingRight: 15 }}>
      {posts?.map((post: Post) => {
        return (
          <Grid key={post._id} item md={6} sm={12}>
            <Card text={post.text} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Posts;
