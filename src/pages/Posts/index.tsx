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

  async function getPosts() {
    const response = await api.get('/posts');
    setPosts(response.data);
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <Grid container sx={{ padding: 5 }}>
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
